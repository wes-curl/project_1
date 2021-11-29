const mongoose = require("mongoose");
const ProfessorSchema = require("../models/professor");
const professorServices = require("../models/professor-services");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Connection = require("../database/connection");

let mongoServer;
let conn;
let professorModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = await mongoose.createConnection(uri, mongooseOpts);

  professorModel = conn.model("Professor", ProfessorSchema);

  Connection.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyUser = {
    name: "Bruno da Silva",
    dept: "CSC",
    reviews: [
      {
        course: "307",
        rating: "5",
        comment: "great",
      },
      {
        course: "308",
        rating: "4",
        comment: "good",
      },
    ],
  };
  let result = new professorModel(dummyUser);
  await result.save();

  dummyUser = {
    name: "John Oliver",
    dept: "CPE",
  };
  result = new professorModel(dummyUser);
  await result.save();

  dummyUser = {
    name: "John Oliver",
    dept: "CPE Professor",
  };
  result = new professorModel(dummyUser);
  await result.save();

  dummyUser = {
    name: "Hugh Smith",
    dept: "CPE",
  };
  result = new professorModel(dummyUser);
  await result.save();

  dummyUser = {
    name: "Bryan Mealy",
    dept: "CPE",
  };
  result = new professorModel(dummyUser);
  await result.save();
});

afterEach(async () => {
  await professorModel.deleteMany();
});

test("Fetching all professors", async () => {
  const professors = await professorServices.findProfessor();
  expect(professors).toBeDefined();
  expect(professors.length).toBeGreaterThan(0);
});

test("Fetch professor by name", async () => {
  const professorName = "John Oliver";
  const professors = await professorServices.findProfessor(professorName);
  expect(professors).toBeDefined();
  expect(professors.length).toBeGreaterThan(0);
  professors.forEach((professor) => expect(professor.name).toBe(professorName));
});

test("Fetch professor by name and dept", async () => {
  const professorName = "Bruno da Silva";
  const professorDept = "CSC";
  const professorFound = await professorServices.findProfessor(
    professorName,
    professorDept
  );
  expect(professorFound).toBeDefined();
  professorFound.forEach((professor) =>
    expect(professor.name).toBe(professorName)
  );
  professorFound.forEach((professor) =>
    expect(professor.dept).toBe(professorDept)
  );
});

test("Add Professor", async () => {
  let profToAdd = {
    name: "Sajan Johal",
    dept: "CPE",
  };
  let result = await professorServices.addProfessor(profToAdd);

  expect(result).toBeDefined();
  expect(result.name).toBe(profToAdd.name);
  expect(result.dept).toBe(profToAdd.dept);
});

test("Fetch professors by dept", async () => {
  const dept = "CPE";
  const professors = await professorServices.findProfessor(undefined, dept);

  expect(professors).toBeDefined();
  expect(professors.length).toBeGreaterThan(0);
  professors.forEach((professor) => expect(professor.dept).toBe(dept));
});

test("Add Review", async () => {
  let result = await professorServices.addReview(
    "Bruno da Silva",
    "csc307",
    5,
    "fall",
    2021,
    "love the prof!"
  );

  expect(result).toBeDefined();
  expect(result.name).toBe("Bruno da Silva");
  expect(result.courses).toContain("csc307");
  expect(result.reviews).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        course: "csc307",
        rating: 5,
        term: "fall",
        year: 2021,
        comment: "love the prof!",
        upvotes: 0,
        downvotes: 0,
      }),
    ])
  );
});

test("Test upvoting a review", async () => {
  await professorServices.addReview(
    "Bruno da Silva",
    "csc307",
    5,
    "fall",
    2021,
    "love the prof!"
  );

  let professor = await professorServices.findProfessor("Bruno da Silva");

  let result = await professorServices.vote(professor[0]._id, 2, true);

  expect(result).toBeDefined();
  expect(result.upvotes).toBe(1);
  expect(result.downvotes).toBe(0);
});

test("Test downvoting a review", async () => {
  await professorServices.addReview(
    "Bruno da Silva",
    "csc307",
    5,
    "fall",
    2021,
    "love the prof!"
  );

  let professor = await professorServices.findProfessor("Bruno da Silva");

  let result = await professorServices.vote(professor[0]._id, 2, false);

  expect(result).toBeDefined();
  expect(result.upvotes).toBe(0);
  expect(result.downvotes).toBe(1);
});

test("Test voting on a non existent review", async () => {
  let professor = await professorServices.findProfessor("Bruno da Silva");

  let result = await professorServices.vote(professor[0]._id, 10, false);

  expect(result).toBeUndefined();
});

test("Fetch ratings by professor", async () => {
  const expectedResult1 = {
    course: "307",
    rating: 5,
    comment: "great",
  };
  const expectedResult2 = {
    course: "308",
    rating: 4,
    comment: "good",
  };

  const professorName = "Bruno da Silva";
  const reviewsFound = await professorServices.getAllReviews(professorName);
  expect(reviewsFound.length).toBe(2);
  expect(reviewsFound).toEqual(
    expect.arrayContaining([expect.objectContaining(expectedResult1)])
  );
  expect(reviewsFound).toEqual(
    expect.arrayContaining([expect.objectContaining(expectedResult2)])
  );
});

/*test("Gravatar URL test", async () => {
  const expectedURL =
    "https://www.gravatar.com/avatar/719cb45d9a9a68c217d0c94fbbac8d87?r=g&s=250";
  expect(grav.getGravatar("aeller916@gmail.com", "250")).toBe(expectedURL);
});*/

const mongoose = require("mongoose");
const CourseSchema = require("../models/course");
const courseServices = require("../models/course-services");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Connection = require("../database/connection");
const { title } = require("process");

let mongoServer;
let conn;
let courseModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = await mongoose.createConnection(uri, mongooseOpts);

  courseModel = conn.model("Course", CourseSchema);

  Connection.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyCourse = {
    name: "csc307",
    professors: ["Bruno da Silva"],
  };
  let result = new courseModel(dummyCourse);
  await result.save();

  dummyCourse = {
    name: "csc349",
    professors: ["Theresa Migler", "Christopher Siu", "Brian Jones"],
  };
  result = new courseModel(dummyCourse);
  await result.save();
});

afterEach(async () => {
  await courseModel.deleteMany();
});

test("Find Professor By Course - course exists", async () => {
  const professors = await courseServices.findProfByCourse("csc349");
  expect(professors).toBeDefined();
  expect(professors.length).toEqual(3);
});

test("Find Professor By Course - course does not exist", async () => {
  const professors = await courseServices.findProfByCourse("bio123");
  expect(professors).toBeDefined();
  expect(professors).toBe(null);
});

test("Find Course By Course Name", async () => {
  const course = await courseServices.findCourseByCourseName("csc349");
  expect(course).toBeDefined();
  expect(course.name).toBe("csc349");
  expect(course.professors.length).toEqual(3);
});

test("Add Course", async () => {
  const course = await courseServices.addCourse("cpe123", "Kirsten Mork");
  expect(course).toBeDefined();
  expect(course.name).toBe("cpe123");
  expect(course.professors.length).toEqual(1);
});

test("Add Professor", async () => {
  let course = await courseServices.addProfessor(
    "csc349",
    "New Professor Name"
  );
  console.log(course);
  expect(course).toBeDefined();
  expect(course.name).toBe("csc349");
  expect(course.professors.length).toEqual(4);
});

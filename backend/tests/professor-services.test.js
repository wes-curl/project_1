const mongoose = require("mongoose");
const ProfessorSchema = require("../models/professor");
const professorServices = require('../models/professor-services');
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

afterAll(async() => {
    await conn.dropDatabase();
    await conn.close();
    await mongoServer.stop();
});

beforeEach(async () => {

    let dummyUser = {
        name: "Bruno da Silva",
        dept: "CSC",
    };
    let result = new professorModel(dummyUser);
    await result.save();

    dummyUser = {
        name: "John Oliver",
        dept: "CPE",
    }
    result = new professorModel(dummyUser);
    await result.save();

    dummyUser = {
        name: "John Oliver",
        dept: "CPE Professor"
    }
    result = new professorModel(dummyUser);
    await result.save();
});

afterEach(async () => {
    await professorModel.deleteMany();
});

test('Fetching all professors', async() => {
    const professors = await professorServices.getAllProfessors();
    expect(professors).toBeDefined();
    expect(professors.length).toBeGreaterThan(0);
});

test('Fetch professor by name', async() => {
    const professorName = "John Oliver";
    const professors = await professorServices.findProfByName(professorName);
    expect(professors).toBeDefined();
    expect(professors.length).toBeGreaterThan(0);
    professors.forEach((professor) => expect(professor.name).toBe(professorName));
});

test('Fetch professor by name and dept', async() => {
    const professorName = "Bruno da Silva";
    const professorDept = "CSC";
    const professorFound = await professorServices.findProfByNameAndDept(professorName, professorDept);
    
    expect(professorFound).toBeDefined();
    expect(professorFound.name).toBe(professorName);
    expect(professorFound.dept).toBe(professorDept);
})

test('Add Professor', async() => {

    let profToAdd = {
        name: "Sajan Johal",
        dept: "CPE",
    }
    let result = await professorServices.addProfessor(profToAdd);
    
    expect(result).toBeDefined();
    expect(result.name).toBe(profToAdd.name);
    expect(result.dept).toBe(profToAdd.dept);
})

test('Add Review', async () => {
    let result = await professorServices.addReview("Bruno da Silva", "csc307", 5, "fall", 2021, "love the prof!")

    expect(result).toBeDefined();
    expect(result.name).toBe("Bruno da Silva")
    expect(result.courses).toContain("csc307")
    expect(result.reviews).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ 
            'course': 'csc307',
            'rating': 5,
            'term': 'fall',
            'year': 2021,
            'comment': "love the prof!"
          })
        ])
      )
})
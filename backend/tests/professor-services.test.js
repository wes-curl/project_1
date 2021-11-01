const myFunctions = require('../models/professor-services.js');
const Professor = require('../models/professor');

const professor = {
    "name": "Sajan2",
    "dept": "CPE"
}

professorTarget = new Professor(professor);

test ('Testing Search for Professor -- success', async () => {
    const result = await myFunctions.findProfByNameAndDept(professor.name, professor.dept);

    expect(professorTarget.name).toBe(result.name);
    expect(professorTarget.dept).toBe(result.dept);
})
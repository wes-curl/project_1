const myFunctions = require('../models/professor-services')

professor = {
    'name': 'Sajan',
    'dept': 'CPE'
}

test('Test Find Professor', async () => {

    const result = await myFunctions.findProfByNameAndDept(professor.name, professor.dept);

    expect(result.name).toBe(professor.name)
    expect(result.dept).toBe(professor.dept)
})
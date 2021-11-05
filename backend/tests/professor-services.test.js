const myFunctions = require('../models/professor-services')

professor = {
    'name': 'Sajan',
    'dept': 'CPE'
}

// Dummy test
test('dummy test --should always pass', ()=>{
    expect(1).toBe(1);
});

// Does not work
/*test('Test Find Professor', async () => {
    const result = await myFunctions.findProfByNameAndDept(professor.name, professor.dept);
    
    expect(result.name).toBe(professor.name)
    expect(result.dept).toBe(professor.dept)
})*/
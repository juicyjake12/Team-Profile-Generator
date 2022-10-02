const Intern = require("../lib/Intern.js");

test("can create school", ()=>{
    const testSchool = "School Name";
    const employeeInstance = new Intern("jake", 1, "juicyjake1234@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
})

test("testing office number", ()=>{
    const testSchool = "School Name";
    const employeeInstance = new Intern("jake", 1, "juicyjake1234@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
})

test("testing role", ()=>{
    const returnValue = "Intern";
    const employeeInstance = new Intern("jake", 1, "juicyjake1234@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
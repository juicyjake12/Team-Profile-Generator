const Engineer = require("../lib/Engineer.js");

test("can create github", () =>{
    const testGithub = "juicyjake12";
    const employeeInstance = new Engineer("jake", 1, "juicyjake1234@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
})

test("testing github returns link", () =>{
    const testGithub = "juicyjake12";
    const employeeInstance = new Engineer("jake", 1, "juicyjake1234@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
})

test("testing role", ()=>{
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("jake", 1, "juicyjake1234@gmail.com", "juicyjake12" );
    expect(employeeInstance.getRole()).toBe(returnValue);
});
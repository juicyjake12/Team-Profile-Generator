const Manager = require("../lib/Manager.js");

test("create office number", ()=>{
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("jake", 1, "juicyjake1234@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
})

test("testing office number", ()=>{
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("jake", 1, "juicyjake1234@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
})

test("testing role", ()=>{
    const returnValue = "Manager";
    const employeeInstance = new Manager("jake", 1, "juicyjake1234@gmail.com", 1);
    expect(employeeInstance.getRole()).toBe(returnValue);
})
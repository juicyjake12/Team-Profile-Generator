const Employee = require("../lib/Employee.js");

test("can create new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof (employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "jake";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing Id.", () => {
    const id = 1;
    const employeeInstance = new Employee("jake", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "juicyjake1234@gmail.com";
    const employeeInstance = new Employee("jake", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name.", () => {
    const testName = "jake";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("can test id with get id", ()=>{
    const testid = 1;
    const employeeInstance = new Employee("jake", testid);
    expect(employeeInstance.getId()).toBe(testid);
})

test("can get email through get", () =>{
    const testEmail = "juicyjake1234@gmail.com";
    const employeeInstance = new Employee("jake", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("testing role", () =>{
    const returnValue = "Employee";
    const employeeInstance = new Employee("jake", 2, "juicyjake1234@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
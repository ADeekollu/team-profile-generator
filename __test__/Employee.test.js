const Employee = require("../lib/Employee")

test("Test Employee is an object", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(typeof(testEmp)).toBe("object")
})

test("Test Employee - Name attr", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.name).toBe("Rich")
})

test("Test Employee - Id attr", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.id).toBe(123)
})

test("Test Employee - email attr", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.email).toBe("test@gmail.com")
})

test("Test Employee - getName()", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.getName()).toBe("Rich")
})

test("Test Employee - getId()", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.getId()).toBe(123)
})

test("Test Employee - getEmail()", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.getEmail()).toBe("test@gmail.com")
})

test("Test Employee - getRole()", () => {
    const testEmp = new Employee("Rich",123,"test@gmail.com");
    expect(testEmp.getRole()).toBe("Employee")
})


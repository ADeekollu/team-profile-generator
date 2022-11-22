const Manager = require("../lib/Manager");

test("Can create an Office number.", () => {
    const testOfficeNumber = 2
    const employeeTest = new Manager("Rich", 2, "test@gmail.com", testOfficeNumber)

    expect(employeeTest.officeNumber).toBe(testOfficeNumber)
})

test("Testing Office Number will return an office number.", () => {
    const testOfficeNumber = 2
    const employeeTest = new Manager("Rich", 2, "test@gmail.com", testOfficeNumber)

    expect(employeeTest.getOfficeNumber()).toBe(testOfficeNumber)
})

test("Testing Role", () => {
    const employeeRole = "Manager"
    const employeeTest = new Manager("Rich", 2, "test@gmail.com",)

    expect(employeeTest.getRole()).toBe(employeeRole)
})
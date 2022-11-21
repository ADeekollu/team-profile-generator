const Intern = require("../lib/Intern")


test("Can create a school", () => {
    const testSchool = "School Name"
    const employeeTest = new Intern("Ankith", 2, "ankithdeekollu@gmail.com", testSchool)

    expect(employeeTest.school).toBe(testSchool)
})


test("Can create a github", () => {
    const testSchool = "School Name"
    const employeeTest = new Intern("Ankith", 2, "ankithdeekollu@gmail.com", testSchool)

    expect(employeeTest.getSchool()).toBe(testSchool)
})


test("Can create a github", () => {
    const testSchool = "Intern"
    const employeeTest = new Intern("Ankith", 2, "ankithdeekollu@gmail.com", "School Name")

    expect(employeeTest.getRole()).toBe(testSchool)
})
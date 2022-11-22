const Engineer = require("../lib/Engineer")

test("Can create a github", () => {
    const testGithub = "ADeekollu"
    const employeeTest = new Engineer("Rich", 2, "test@gmail.com", testGithub)

    expect(employeeTest.github).toBe(testGithub)
})

test("Testing getGithub will return", () => {
    const testGithub = "ADeekollu"
    const employeeTest = new Engineer("Rich", 2, "test@gmail.com", testGithub)

    expect(employeeTest.getGitHub()).toBe(testGithub)
})

test("Can create a github", () => {
    const employeeRole = "Engineer"
    const employeeTest = new Engineer("Rich", 2, "test@gmail.com",)

    expect(employeeTest.getRole()).toBe(employeeRole)
});


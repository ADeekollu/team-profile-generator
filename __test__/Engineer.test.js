const Engineer = require("../lib/Engineer")

test("Can create a github", () => {
    const testGithub = "ADeekollu"
    const employeeTest = new Engineer("Ankith", 2, "ankithdeekollu@gmail.com", testGithub)

    expect(employeeTest.github).toBe(testGithub)
})

test("Testing getGithub will return", () => {
    const testGithub = "ADeekollu"
    const employeeTest = new Engineer("Ankith", 2, "ankithdeekollu@gmail.com", testGithub)

    expect(employeeTest.getGitHub()).toBe(testGithub)
})

test("Can create a github", () => {
    const testGithub = "Engineer"
    const employeeTest = new Engineer("Ankith", 2, "ankithdeekollu@gmail.com",)

    expect(employeeTest.getRole()).toBe(testGithub)
});


const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/template")
const { default: Choices } = require("inquirer/lib/objects/choices");

const employeeArray = []

function fireApp() {

    function addEmployee(){
        inquirer.prompt([{
            type : "list",
            name : "employeePrompt",
            message: "What type of employee would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "No more employees needed"]
        }]).then(function(userInput) {
            switch(userInput.employeePromt) {
                case "Manager":
                    addManager();
                    break;
                case "Engineer":
                    addEngineer();   
                    break;
                case "Intern":
                    addIntern();
                    break;

                default:
                    htmlBuild();

            }            

        })       

    }

}


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's Name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your Manager employee ID?",        
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number?",
        },
        
     ]).then(response => {
            const manager = new Manager(respose.managerName,response.managerId,response.managerEmail, response.managerOfficeNumber)
            employeeArray.push(manager)
            addEmployee()
        });

}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's Name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is your engineer employee ID?",        
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's Github?",
        },
        
     ]).then(response => {
            const manager = new Engineer(respose.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub)
            employeeArray.push(engineer)
            addEmployee()
        });
        
}


function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's Name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is your intern employee ID?",        
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern go to school?",
        },
        
     ]).then(response => {
            const manager = new Manager(respose.internName, response.internId, response.internEmail, response.internSchool)
            employeeArray.push(intern)
            addEmployee()
        });
        
}



function htmlBuild(fileName, data) {
    return inquirer.prompt() 
        .then((data) => {
            const html = generateHtml(data); 

            fs.writeFile('./dist/index.html', html, function(err) {
                if (err) {
                    console.log("Could not save file", err)
                } else {
                    console.log("New HTML generated")
                }
            })
        })
 }

fireApp();
addEmployee();
htmlBuild();

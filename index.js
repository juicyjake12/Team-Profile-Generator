const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const outPutDir = path.resolve(__dirname, "output");
const outputPath = path.join(outPutDir, "index.html");
const generateTeams = require("./src/template.js");

teamArray = [];

function runapp() {

    function createTeam() {
        inquirer.prompt([{
            type: "list",
            message: "What type of employee would you like to add to your team?",
            name: "addEmployeePrompt",
            choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
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
                    htmlBuilder();
            }
        })
    }

    function addManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the managers name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the managers employee ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager Email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is managers office number?"
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            createTeam();
        })
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineers name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineers employee ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the engineers Email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineers Github username?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is interns name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the interns Email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What school does the intern attend?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }

    function htmlBuilder() {
        console.log("Team created")

        fs.writeFileSync(outputPath, generateTeams(teamArray), "utf-8");
    }

    createTeam();
}


runapp()
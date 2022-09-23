const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern.js");

teamArray = [];

function runapp() {

    function createTeam() {
        inquirer.prompt([{
            type: "List",
            message: "",
            name: "",
            choices: ["Manager", "Engineer", "Intern", "No more team members."]
        }]).then(function (userInput) {
            switch (userInput.addEmployeePrompt) {
                case "Manager": addManager()
                    break;
                case "Engineer": addEngineer()
                    break;
                case "Intern": addIntern()
                    break;

                default: htmlBuilder();
            }
        })
    }
}
runapp()
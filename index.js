const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");
const questions = require("./utils/questions")



// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (answers) {
            // console.log(answers);
            // console.log(answers.title);            
         return writeToFile('newREADME.md', generate(answers))
         });
};

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        // console.log(data);
        if (err) {
            return console.log(err);
        }
        console.log("You're readme.md File is Ready, Thank You!");
    });
};

// function call to initialize program
init();

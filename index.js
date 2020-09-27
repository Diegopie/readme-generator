const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// array of questions for user


const valInput = function stringCheck(inp) {
    if (inp == "") {
        return "Please Enter Valid Information";
    }
    return true;
};

// Do optional ones last? 

const questions = [
    
    
    // license 
    

    { // Title
        type: "input", 
        name: "title",
        message: "What is Your Project Called?",
        validate: valInput
    },
    { // Github
        type: "input",
        name: "github",
        message: "What is Your Github Username?",
        validate: valInput
    },
    { // email
        type: "input",
        name: "email",
        message: "Please Enter Your Email",
        validate: valInput
    },
    { // Description
            //   CHANGE TYPE BACK TO EDITOR
        type: "input",
        name: "desc",
        message: "Write a Description of Your Project",
        validate: valInput
    },
    { // Img Path -  ./assets/demo.png
        type: "input",
        name: "relPath",
        message: "Please Provide the Relative Path to Your Demo image/gif"
    },
    { // Installation
         //   CHANGE TYPE BACK TO EDITOR
        type: "input",
        name: "instal",
        message: "What are the Installation Requirements for Your Project"
    },
    { // Usage 
        //   CHANGE TYPE BACK TO EDITOR
        type: "input",
        name: "usage",
        message: "What is the Use Case for Your Application?",
        validate: valInput
    }, 
    { // Collaborators
            //   CHANGE TYPE BACK TO EDITOR
        type: "input",
        name: "collab",
        message: "Would you like to credit any collaborators?"
    },
    { // License 
        type: 'list',
        message: 'Which License Would You Like for Your Project?',
        name: 'licen',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        validate: valInput
    },
    

];

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

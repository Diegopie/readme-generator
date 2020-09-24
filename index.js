const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    
     
    
    // Installation
    // Usage, 
        // text, editor
    
    // Outcome
        // text, editor
    // Collaborators
        // text, editor
    // license 
    // Git hub link

    { // Title
        type: "input", 
        name: "title",
        message: "What's Your Project Called?"  
    },
    { // Description
            //   CHANGE TYPE BACK TO EDITOR
        type: "input",
        name: "desc",
        message: "Write a Description of Your Project"
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
        message: "What is the Use Case for Your Application?"
    }
];

// function to write README file
function writeToFile(fileName, response) {
    fs.writeFile(fileName, response, err => {
        console.log(response);
        if (err) {
            return console.log(err);
        }
        console.log("You're readMe.md File is Ready, Thank You!");
    });
};


// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {


            console.log(data);
            console.log(data.relPath);

            
         return writeToFile('newREADME.md', generate(data))
         });

};

// function call to initialize program
init();

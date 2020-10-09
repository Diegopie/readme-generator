// array of questions for user


const valInput = 
{
    string: (inp) => {
        if(inp == "") {
            return "Please Enter Valid Information";
        }
        return true;
    },
    // Figure out regex for email
    email: (inp) => {
        let format = inp.match(/\S+@\S+\.\S+/g);
        if(!format) {
            
            return "Please Enter a Valid Email";
        }
        return true;
    }
}

// Do optional ones last? 

const questions = [
    { // Title
        type: "input", 
        name: "title",
        message: "What is Your Project Called?",
        validate: valInput.string
        // default: "Testing is fun"
    },
    { // Github
        type: "input",
        name: "github",
        message: "What is Your Github Username?",
        validate: valInput.string
        // default: "Testing is fun"
    },
    { // Ask email
        type: "confirm",
        name: "incEmail",
        message: "Would you like to include your email?"
    },
    { // email
        type: "input",
        name: "email",
        message: "Please Enter Your Email",
        when: answers => {
            return answers.incEmail == true;
        },
        validate: valInput.email
        // default: "Testing is fun"
    },
    { // Description
            //   CHANGE TYPE BACK TO EDITOR
        type: "editor",
        name: "desc",
        message: "Write a Description of Your Project",
        validate: valInput.string
        // default: "Testing is fun"
    },
    { // Ask Demo
        type: "confirm",
        name: "incDemo",
        message: "Would you like to include an image or gif of your project?"
    },
    { // Img Path -  ./assets/demo.png
        type: "input",
        name: "relPath",
        message: "Please Provide the Relative Path to Your Demo image/gif",
        when: answers => {
            return answers.incDemo == true;
        },
        // default: "./assets/demo-2.gif"
    },
    { // Ask Install
        type: "confirm",
        name: "incInstal",
        message: "Would you like to include installation instructions?"
    },
    { // Installation
         //   CHANGE TYPE BACK TO EDITOR
        type: "editor",
        name: "instal",
        message: "What are the Installation Requirements for Your Project",
        when: answers => {
            return answers.incInstal == true;
        },
        // default: "Testing is fun"
    },
    { // Ask Usage/UserStory
        type: "confirm",
        name: "incUse",
        message: "Would you like to include a usage explanation for your project?"
    },
    { // Usage 
        //   CHANGE TYPE BACK TO EDITOR
        type: "editor",
        name: "usage",
        message: "How Do Users Use Your Application?",
        when: answers => {
            return answers.incUse == true;
        },
        validate: valInput.string
        // default: "Testing is fun"
    }, 
    { // Ask Collaborators
        type: "confirm",
        name: "incCollab",
        message: "Would you like to include collaborators your project?"
    },
    { // Collaborators
            //   CHANGE TYPE BACK TO EDITOR
        type: "editor",
        name: "collab",
        message: "Would you like to credit any collaborators or technologies used?",
        when: answers => {
            return answers.incCollab == true;
        },
        // default: "Testing is fun"
    },
    { // License 
        type: 'rawlist',
        message: 'Which License Would You Like for Your Project?',
        name: 'licen',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense'],
        validate: valInput.string,
        default: "MIT License"
    }
];


module.exports = valInput;
module.exports = questions;
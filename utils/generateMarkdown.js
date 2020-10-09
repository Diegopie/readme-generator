const moment = require("moment")

// * function to generate markdown for README

function generateMarkdown(data) {
// * Create content for Title, Desc, Image

let titleDesc = `# ${data.title}\n\n${data.desc}\n\n`


if (data.relPath !== undefined){
    titleDesc += `![${data.title}](${data.relPath})\n`
}

// * Create Table of contents based on which fields the user populated

function tableFunc() {
let table = `## Table of Contents\n\n`

if (data.instal !== undefined){
  table += `* [Installation](#installation)\n`
}
if (data.usage !== undefined){
  table += `* [Usage](#usage)\n`
}
table += `* [Questions](#Questions?)\n`
if (data.collab !== undefined){
  table += `* [Collaborators](#collaborators)\n`
}
table += `* [License](#license)\n`
return table
}
let finalTable = tableFunc()

// Create content for Installation

let instal = ``
  if (data.usage !== undefined){
    instal += `\n## Usage\n\n${data.usage}\n`
  }

// Create content for  Usage

let usage = ``
if (data.instal !== undefined){
  instal += `\n## Installation\n\n${data.instal}\n`
}  

// Create Questions

function quest(){ 
  let questSec = `\n## Questions?\n\nFor any inquiries or feedback, please reach me at [${data.github}](https://github.com/${data.github})\n` 
  if(data.email === undefined) {
    return questSec
  };
  let email = ` or at ${data.email}`
  questSec += email;
  return questSec
};

let questions = quest()


// Create content for  Collaborators

let collab = ``;
if (data.collab !== undefined){
  collab += `\n## Collaborators\n\n${data.collab}\n\n`
}  

let lice = `## License\n\n${data.licen}\nCopyright (c) ${moment().format("YYYY")} ${data.github}`


  return titleDesc += finalTable += instal += usage += questions += collab += lice;
}


module.exports = generateMarkdown;

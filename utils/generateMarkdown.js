const moment = require("moment")

// function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data.title);

// Create content for Title, Desc, Image
let p1 = `
# ${data.title}

${data.desc}

![${data.title}](${data.relPath})
`
// Create Table of contents based on which fields the user populated
let table = `
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Questions](#Questions?)
* [Collaborators](#collaborators)

`
// Create content for Installation, Usage, Questions, Collaborators
let p2 = `
## Installation

${data.instal}

## Usage

${data.usage}

## Questions?

For any inquiries or feedback, please reach me at [${data.github}](https://github.com/${data.github}) or at ${data.email}

## Collaborators

${data.collab}

## License
${data.licen}
Copyright (c) ${moment().format("YYYY")} ${data.github}
`


  return p1 += table += p2;
}


module.exports = generateMarkdown;

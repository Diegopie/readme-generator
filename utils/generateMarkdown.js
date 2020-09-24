// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);

// Create content for Title, Desc, Image
let p1 = `
# ${data.title}

${data.desc}

![${data.title}](${data.relPath})
`
// Create Table of contents based on which fields the user populated
let table = `
## Table of Contents

`
// Create content for 
let p2 = `
## Installation

${data.instal}

## Usage

${data.usage}
`


  return p1 += table += p2;
}


module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  if (license!=="None")

   return `![${license} badge ](https://img.shields.io/badge/License-${license}-yellow.svg)`

return ``


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=="None")
  return `- [License](#license)`
return``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=="None")
  return `## License\nThis project is licensened under the ${license} license.` 
return``
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  by ${data.name}
  ## Description
  ${data.task}
  ## Table of Contents
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Use](#use)
  ${renderLicenseLink(data.license)}
  - [Contact Info](#contact-info)


  ## User Story
  ${data.story}
  ## Acceptance Criteria
  ${data.criteria}
  ## Use
  ${data.use}
  ${renderLicenseSection(data.license)}
  ## Contact Info
  ${data.name}
  ${data.email}
  ${data.git}

  
`;
}

module.exports = generateMarkdown;

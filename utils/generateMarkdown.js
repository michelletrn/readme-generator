var badge;
var badgeLink;

function renderLicenseBadge(l) {
  if (l.license == 'MIT') {
    badge = `[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://img.shields.io/badge/license-MIT-blue)`,
      badgeLink = 'https://www.mit.edu/~amini/LICENSE.md'
  }
  else if (l.license == 'APACHE 2.0') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      badgeLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  }
  else if (l.license == 'BSD 3') {
    badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
      badgeLink = 'https://opensource.org/licenses/BSD-3-Clause'
  }
  else if (l.license == 'GPL 3.0') {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
      badgeLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else { badge = '', badgeLink = '' }
  return badge, badgeLink
}

function generateMarkdown(data) {
  renderLicenseBadge(data);

  return `# ${data.title} 
   ${badge}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation
  \n ${data.installation}
  
  
  ## Usage
  ${data.usage}
 
 
  ## License
  ${data.license}
  ${badgeLink}
  
  ## Contributions
  Contributors: ${data.contributor}
  \n How to contribute: ${data.contributeHow}
  
  -----------------------------------------------------------------------------
  
  ## Features
  
  ${data.features}

  ## Tests

  ${data.tests}
    
  ## Questions
  If you have any questions, please contact:
  
  Github: ${data.username}, 
  \n Email: ${data.email}
  `;
}

module.exports = generateMarkdown;

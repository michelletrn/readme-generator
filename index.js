const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Please enter Github username. ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Please enter contact email for questions/concerns. ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter project title.',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a description of your project. (Please enter "N/A", if not applicable for your project.)',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions. (Please enter "N/A", if not applicable for your project.)',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please enter any instructions for use. (Please enter "N/A", if not applicable for your project.)',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Select your license',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        message: 'Please name contributor(s):',
        name: 'contributor',

    },
    {
        type: 'input',
        message: 'How can others contribute to the project? (Please enter "N/A", if not applicable for your project.)',
        name: 'contributeHow',
    },
    {
        type: 'input',
        message: 'Please describe project features here:  (Please enter "N/A", if not applicable for your project.)',
        name: 'features'
    },
    {
        type: 'input',
        message: 'Please describe tests here:  (Please enter "N/A", if not applicable for your project.)',
        name: 'tests'
    }

];

inquirer.prompt(questions)
    .then((data) => {
        const readme = generateMarkdown(data);

        fs.writeFile(`${data.title.toLowerCase().split(' ').join('')}-README.md`, readme, (err) =>
            err ? consosle.log(err) : console.log('Generating README...'));
    })


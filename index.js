// Import npm packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Import roles/classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Add Team Member
function addTeamMember() {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'teamMember',
            message: 'Add an engineer or an intern or finish building my team?',
            choices: ['Engineer', 'Intern', 'Assemble Team'],
        },
    ])
    .then ((val) => {
        if (val.teamMember === 'Engineer') {
            addEngineer();
        } else if (val.teamMember === 'Intern') {
            addIntern();
        } else {
            createTeamFile();
        }
    });
};

// Add Manager
function addManager () {
    inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee id of the manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the manager?',
            },
        ])
        .then((val) => {
            const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
            console.table(manager);
            teamMembers.push(manager);
            addTeamMember();
        });
    };

// Add Engineer
function addEngineer () {
    inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the engineer?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee id of the engineer?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the engineer?',
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is the GitHub username of the engineer?',
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.gitHub);
            console.table(engineer);
            teamMembers.push(engineer);
            addTeamMember();
        });
    };

// Add Intern
function addIntern () {
    inquirer
       .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the intern?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the employee id of the intern?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the intern?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school of the intern?',
            },
        ])
        .then((val) => {
            const engineer = new Engineer(val.name, val.id, val.email, val.gitHub);
            console.table(engineer);
            teamMembers.push(engineer);
            addTeamMember();
        });
    };

    // Create HTML file
    

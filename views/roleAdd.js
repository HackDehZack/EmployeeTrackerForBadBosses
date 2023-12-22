const inquirer = require('inquirer');
const Role = require('../models/Role.js'); 

async function addRole() {
  try {
    const roleDetails = await inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the role:',
        validate: (value) => (value ? true : 'Please enter a title.'),
      },
      {
        type: 'number',
        name: 'salary',
        message: 'Enter the salary for the role:',
        validate: (value) => (value ? true : 'Please enter a salary.'),
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the role:',
        validate: (value) => (value ? true : 'Please enter a department ID.'),
      },
    ]);

    const { title, salary, departmentId } = roleDetails;

    // Create a new Role instance
    const newRole = new Role(title, salary, departmentId);

    console.log('Role added successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

module.exports = addRole;
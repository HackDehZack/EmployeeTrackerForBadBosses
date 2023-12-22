const inquirer = require('inquirer');

// Function to prompt the user for employee details
function promptAddEmployee(roles, managers) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the first name of the employee:',
          validate: (input) => {
            if (input.trim() === '') {
              return 'First name cannot be empty.';
            }
            return true;
          },
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the last name of the employee:',
          validate: (input) => {
            if (input.trim() === '') {
              return 'Last name cannot be empty.';
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'role',
          message: 'Select the role of the employee:',
          choices: roles.map((role) => ({
            name: role.title,
            value: role.id,
          })),
        },
        {
          type: 'list',
          name: 'manager',
          message: 'Select the manager of the employee:',
          choices: [
            { name: 'None', value: null },
            ...managers.map((manager) => ({
              name: `${manager.firstName} ${manager.lastName}`,
              value: manager.id,
            })),
          ],
        },
      ])
      .then((answers) => {
        resolve(answers);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Export the promptAddEmployee function
module.exports = {
  promptAddEmployee,
};
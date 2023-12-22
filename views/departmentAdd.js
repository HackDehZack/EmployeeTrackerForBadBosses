const inquirer = require('inquirer');

// Function to prompt the user for department details
function promptAddDepartment() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter the name of the department:',
          validate: (input) => {
            if (input.trim() === '') {
              return 'Department name cannot be empty.';
            }
            return true;
          },
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

// Export the promptAddDepartment function
module.exports = {
  promptAddDepartment,
};
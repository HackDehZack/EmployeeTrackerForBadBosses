const inquirer = require('inquirer');

// Function to prompt the user for employee update details
function promptUpdateEmployeeRole(employees, roles) {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'employeeId',
          message: 'Select the employee to update:',
          choices: employees.map((employee) => ({
            name: `${employee.firstName} ${employee.lastName}`,
            value: employee.id,
          })),
        },
        {
          type: 'list',
          name: 'roleId',
          message: 'Select the new role for the employee:',
          choices: roles.map((role) => ({
            name: role.title,
            value: role.id,
          })),
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

// Export the promptUpdateEmployeeRole function
module.exports = {
  promptUpdateEmployeeRole,
};
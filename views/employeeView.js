const Table = require('cli-table');

// Function to display employees in a formatted table
function displayEmployees(employees) {
  // Create a new instance of cli-table
  const table = new Table({
    head: ['Employee ID', 'First Name', 'Last Name', 'Role'],
  });

  // Populate the table with employee data
  employees.forEach((employee) => {
    table.push([employee.id, employee.firstName, employee.lastName, employee.role]);
  });

  // Display the table
  console.log(table.toString());
}

// Export the displayEmployees function
module.exports = {
  displayEmployees,
};
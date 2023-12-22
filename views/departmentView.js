const Table = require('cli-table');

// Function to display departments in a formatted table
function displayDepartments(departments) {
  // Create a new instance of cli-table
  const table = new Table({
    head: ['Department ID', 'Department Name'],
  });

  // Populate the table with department data
  departments.forEach((department) => {
    table.push([department.id, department.name]);
  });

  // Display the table
  console.log(table.toString());
}

// Export the displayDepartments function
module.exports = {
  displayDepartments,
};
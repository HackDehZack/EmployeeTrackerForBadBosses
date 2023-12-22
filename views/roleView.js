const Role = require('../models/Role.js'); 

// Function to retrieve and display all roles
function viewRoles() {
  // Retrieve roles from the database or any other data source
  const roles = database.getRoles(); 

  // Display the roles to the user
  console.log('--- Roles ---');
  roles.forEach((role) => {
    console.log(`Title: ${role.title}`);
    console.log(`Salary: ${role.salary}`);
    console.log(`Department ID: ${role.departmentId}`);
    console.log('---');
  });
}

// Export the viewRoles function
module.exports = viewRoles;
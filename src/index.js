const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/Employee'); 

// Import necessary modules for terminal-based UI
const mainMenu = require('../views/mainMenu');
const viewEmployees = require('../views/employeeView');
const viewRoles = require('../views/roleView');
const viewDepartments = require('../views/departmentView');
const addEmployee = require('../views/employeeAdd');
const addRole = require('../views/roleAdd');
const addDepartment = require('../views/departmentAdd');
const employeeUpdate = require('../views/employeeUpdate');
const readlineSync = require('readline-sync');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create an instance of the Employee class
const employee = new Employee();

// Define API routes
app.get('/employees', async (req, res) => {
  try {
    const employees = await employee.getAllEmployees();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving employees' });
  }
});

app.get('/roles', async (req, res) => {
  try {
    const roles = await employee.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving roles' });
  }
});

app.get('/departments', async (req, res) => {
  try {
    const departments = await employee.getAllDepartments();
    res.json(departments);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving departments' });
  }
});

app.post('/employees', async (req, res) => {
  const { firstName, lastName, roleId } = req.body;
  try {
    const result = await employee.addEmployee(firstName, lastName, roleId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding an employee' });
  }
});

app.post('/roles', async (req, res) => {
  const { roleName } = req.body;
  try {
    const result = await employee.addRole(roleName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding a role' });
  }
});

app.post('/departments', async (req, res) => {
  const { departmentName } = req.body;
  try {
    const result = await employee.addDepartment(departmentName);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding a department' });
  }
});

app.put('/employees/:id/role', async (req, res) => {
  const { id } = req.params;
  const { roleId } = req.body;
  try {
    const result = await employee.updateEmployeeRole(id, roleId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating employee role' });
  }
});
// Terminal-based UI
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMainMenu() {
  console.log(mainMenu);
  rl.question('Please enter your choice: ', (choice) => {
    handleMainMenuChoice(choice);
  });
}



function handleMainMenuChoice(choice) {
  switch (choice) {
    case '1':
      displayEmployeeView();
      break;
    case '2':
      displayRoleView();
      break;
    case '3':
      displayDepartmentView();
      break;
    case '4':
      displayAddEmployee();
      break;
    case '5':
      displayAddRole();
      break;
    case '6':
      displayAddDepartment();
      break;
    case '7':
      updateEmployeeRole();
      break;
    case '8':
      updateEmployeeManager();
      break;
    case '9':
      rl.close();
      break;
    case 'up': // Handle up arrow key
      // Handle logic for moving up in the menu
      break;
    case 'down': // Handle down arrow key
      // Handle logic for moving down in the menu
      break;
    case 'left': // Handle left arrow key
      // Handle logic for moving left in the menu
      break;
    case 'right': // Handle right arrow key
      // Handle logic for moving right in the menu
      break;
    default:
      console.log('Invalid choice. Please try again.');
      displayMainMenu();
      break;
  }
}

function displayEmployeeView() {
  console.log(viewEmployees);
  // Retrieve and display employees from the API endpoint '/employees'
  // You can make an HTTP request to the endpoint using a library like 'axios'
  // Handle the response and display the employees
}

function displayRoleView() {
  console.log(viewRoles);
  // Retrieve and display roles from the API endpoint '/roles'
  // Handle the response and display the roles
}

function displayDepartmentView() {
  console.log(viewDepartments);
  // Retrieve and display departments from the API endpoint '/departments'
  // Handle the response and display the departments
}

function displayAddEmployee() {
  console.log(addEmployee);
  // Prompt the user for employee details
  // Make a POST request to the API endpoint '/employees' to add the employee
  // Handle the response and display the result
}

function displayAddRole() {
  console.log(addRole);
  // Prompt the user for role details
  // Make a POST request to the API endpoint '/roles' to add the role
  // Handle the response and display the result
}

function displayAddDepartment() {
  console.log(addDepartment);
  // Prompt the user for department details
  // Make a POST request to the API endpoint '/departments' to add the department
  // Handle the response and display the result
}

function updateEmployeeRole() {
  console.log(updateEmployeeRole);
  // Prompt the user for employee ID and new role ID
  // Make a PUT request to the API endpoint '/employees/:id/role' to update the employee role
  // Handle the response and display the result
}

function updateEmployeeManager() {
  console.log(updateEmployeeManager);
  // Prompt the user for employee ID and new manager ID
  // Make a PUT request to the API endpoint '/employees/:id/role' to update the employee manager
  // Handle the response and display the result
}

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
  displayMainMenu();
});

// The last line of code above starts the Express server on port 3000.
// This port number (3000) is specific to the Express server and is unrelated to the MySQL port (3306) used for the database connection.

// The displayMainMenu() function is called after the server starts to initiate the terminal-based UI.
// It displays the main menu and prompts the user for their choice.
// The handleMainMenuChoice() function handles the user's choice and calls the appropriate functions based on the choice.
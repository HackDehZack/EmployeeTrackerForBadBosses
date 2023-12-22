// Necessary modules (use require statements)
const inquirer = require('inquirer');
const Employee = require('../models/employee');

// Function to display the main menu options
function displayMainMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'menuOption',
        message: 'What would you like to do?',
        choices: ['View all employees', 'Add an employee', 'Update an employee role', 'Exit'],
      },
    ])
    .then((answers) => {
      // Implement the logic for each menu option here
      switch (answers.menuOption) {
        case 'View all employees':
          // Call the method to view all employees
          viewAllEmployees();
          break;
        case 'Add an employee':
          // Call the method to add an employee
          addEmployee();
          break;
        case 'Update an employee role':
          // Call the method to update an employee's role
          updateEmployeeRole();
          break;
        case 'Exit':
          // Exit the application
          console.log('Goodbye!');
          process.exit(0);
          break;
        default:
          console.log('Invalid option selected.');
          break;
      }
    });
}

// Function to view all employees
async function viewAllEmployees() {
  try {
    // Create a new instance of the Employee class
    const employee = new Employee();
    // Call the getAllEmployees method to retrieve all employees
    const employees = await employee.getAllEmployees();
    // Display the employees
    console.log(employees);
    // Display the main menu again
    displayMainMenu();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Function to add an employee
async function addEmployee() {
  try {
    // Implement the logic to add an employee here
    // Display the main menu again
    displayMainMenu();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Function to update an employee's role
async function updateEmployeeRole() {
  try {
    // Implement the logic to update an employee's role here
    // Display the main menu again
    displayMainMenu();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

// Call the function to display the main menu
displayMainMenu();
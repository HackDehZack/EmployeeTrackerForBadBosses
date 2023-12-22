// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('../models/Employee'); // Update the file path for the Employee class

// Create an instance of the Express application
const app = express();

// Set up middleware
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

app.post('/employees', async (req, res) => {
  const { firstName, lastName, roleId, managerId } = req.body;
  try {
    const result = await employee.addEmployee(firstName, lastName, roleId, managerId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding an employee' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

// The last line of code above starts the Express server on port 3000.
// This port number (3000) is specific to the Express server and is unrelated to the MySQL port (3306) used for the database connection.
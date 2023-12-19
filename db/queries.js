const connection = require('./connection');

// Function to retrieve all departments from the database
function getAllDepartments() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM department', (err, departments) => {
        if (err) {
          reject(err);
        } else {
          resolve(departments);
        }
      });
    });
  }
  
  // Function to add a new department to the database
  function addDepartment(name) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO department SET ?', { name }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  // Function to update a department in the database
  function updateDepartment(id, name) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE department SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  // Export the functions for other modules to use
  module.exports = {
    getAllDepartments,
    addDepartment,
    updateDepartment,
  };
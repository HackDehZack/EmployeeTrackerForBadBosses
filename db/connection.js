const mysql = require('mysql');



// Create the database connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',          // ZACK: Be sure to add the MySQL username here!
  password: 'password',     // ZACK: Be sure to add the MySQL password here!
  database: 'employeetrackerforbadbosses'
});



// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database!');
});



// Export the connection object
module.exports = connection;
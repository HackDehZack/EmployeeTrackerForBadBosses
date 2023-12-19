# EmployeeTrackerForBadBosses
EmployeeTrackerForBadBosses is a command-line application that allows you to manage employees, departments, and roles in a company. It provides functionality to view, add, update, and delete data from a MySQL database.

Directory Structure
The project follows the following directory structure:

EmployeeTrackerForBadBosses/
├── db/
│   ├── connection.js
│   ├── queries.js
│   ├── schema.sql
│   └── seeds.sql
├── lib/
│   ├── department.js
│   ├── employee.js
│   └── role.js
└── src/
    └── index.js
└── utils/
    └── helperFunctions.js
db/: Contains files related to the database setup, including the connection configuration, SQL queries, and the database schema definition.

connection.js: Establishes the connection to the MySQL database.
queries.js: Defines functions for executing SQL queries against the database.
schema.sql: Contains the SQL schema definition for creating the necessary tables.
seeds.sql: Contains sample data that can be used to pre-populate the tables.
lib/: Contains modules for managing employees, departments, and roles.

department.js: Defines the Department class, which provides methods for interacting with the department table in the database.
employee.js: Defines the Employee class, which provides methods for interacting with the employee table in the database.
role.js: Defines the Role class, which provides methods for interacting with the role table in the database.
src/: Contains the entry point of the application and any other application-specific files.

index.js: Serves as the entry point of the application.
utils/: Contains helper functions that can be used across different modules.

helperFunctions.js: Provides utility functions that assist in various tasks, such as data formatting and user input validation.
Usage
Install the necessary dependencies by running npm install in the project root directory.
Set up your MySQL database and update the connection configuration in db/connection.js.
Create the necessary tables by running the SQL schema definition in db/schema.sql.
Optionally, populate the tables with sample data using the SQL statements in db/seeds.sql.
Start the application by running node src/index.js in the project root directory.
Features
View a list of all employees, departments, and roles.
Add new employees, departments, and roles.
Update existing employee, department, and role information.
Delete employees, departments, and roles from the database.
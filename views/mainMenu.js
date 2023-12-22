const blessed = require('blessed');

function showMainMenu() {
  // Create a screen
  const screen = blessed.screen({
    smartCSR: true,
  });

  // Create a box for the main menu
  const mainMenuBox = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'Employee Tracker\n\n1. View Departments\n2. View Roles\n3. View Employees\n\nPress Q to quit.',
    tags: true,
    border: 'line',
    style: {
      fg: 'white',
      bg: 'magenta',
      border: {
        fg: 'white',
      },
    },
  });

  // Append the main menu box to the screen
  screen.append(mainMenuBox);

  // Render the screen
  screen.render();

  // Listen for keypress event
  screen.key(['q', 'C-c'], () => {
    // Clean up and exit the program
    screen.destroy();
    process.exit(0);
  });

  // Listen for number keypress events
  screen.key(['1', '2', '3'], (ch, key) => {
    // Remove the main menu box
    screen.remove(mainMenuBox);
    screen.render();

    // Handle the selected option based on the key pressed
    if (key.name === '1') {
      // Option 1: View Departments
      // Call the departmentView function or navigate to the department view
      const departmentView = require('./departmentView');
      departmentView();
    } else if (key.name === '2') {
      // Option 2: View Roles
      // Call the roleView function or navigate to the role view
      const roleView = require('./roleView');
      roleView();
    } else if (key.name === '3') {
      // Option 3: View Employees
      // Call the employeeView function or navigate to the employee view
      const employeeView = require('./employeeView');
      employeeView();
    }

    // Clean up and exit the program after completing the task
    screen.destroy();
    process.exit(0);
  });
}

module.exports = showMainMenu;
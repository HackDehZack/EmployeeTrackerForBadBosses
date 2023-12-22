const blessed = require('blessed');
const departmentView = require('./departmentView');
const roleView = require('./roleView');
const employeeView = require('./employeeView');

function showMainMenu() {
  const screen = blessed.screen({
    smartCSR: true,
  });

  const mainMenuBox = blessed.box({
    top: 'center',
    left: 'center',
    width: '50%',
    height: '50%',
    content: 'EmployeeTrackerForBadBosses\n\n1. View Departments\n2. View Roles\n3. View Employees\n\nPress Q to quit.',
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

  screen.append(mainMenuBox);
  screen.render();

  screen.key(['q', 'C-c'], () => {
    screen.destroy();
    process.exit(0);
  });

  screen.key(['1', '2', '3'], (ch, key) => {
    screen.remove(mainMenuBox);
    screen.render();

    if (key.name === '1') {
      departmentView();
    } else if (key.name === '2') {
      roleView();
    } else if (key.name === '3') {
      employeeView();
    }

    screen.destroy();
    process.exit(0);
  });
}

module.exports = showMainMenu;
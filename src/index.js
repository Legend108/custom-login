require("./express");
require("./sequelize");
require("./sync");

const open = require("open");
const chalk = require("chalk");

(async() => {
    await open("http://localhost:3001");

    console.log(console.log(chalk.bgGreen("Opening website in default browser..")));
})();
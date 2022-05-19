const { Sequelize } = require('sequelize');
const chalk = require("chalk");

const sql = new Sequelize({
    dialect: "sqlite",
    storage: "./src/database/default.sqlite",
});

(async () => {
    try {
        await sql.authenticate();
        console.log(chalk.bgGreen("Sequelize initialized succesfully, proceeding to next process"));
    } catch (error) {
        console.log(chalk.bgRed("Sequelize failed to start. Error: "), error);
        console.log(chalk.bgRed("Exiting..."));
        process.exit();
    }
})();

module.exports = sql;
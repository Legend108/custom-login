const fs = require("fs");
const chalk = require("chalk");

try {
    const models = fs.readdirSync("./src/models");

    models.forEach((model) => {
        const modelToSync = require("./models/" + model);

        modelToSync.sync();
    });

    console.log(chalk.bgGreen("Synced all models succesfully"));
} catch (error) {
    console.log(chalk.bgRed("Failed to sync models, error below. Exiting...\n\n", error));

    process.exit();
}
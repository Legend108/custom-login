const express = require("express");
const app = express();
const morgan = require("morgan");
const parser = require("body-parser");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const fs = require("fs");

app.set("config", require("./config"));
app.set("view-engine", app.get("config").engine);
app.set("views", app.get("config").viewsDirectory);

app.use(morgan());
app.use(bodyParser.urlencoded({
    extended: true,
}));

const files = fs.readdirSync("./src/routes");

files.forEach((file) => {
    const route = require("./routes/" + file);

    app.use(route);
});

const assets = fs.readdirSync("./src/assets");

assets.forEach((asset) => {
    app.get("/assets/" + asset, (req, res) => {
        res.sendFile("./assets/" + asset, {
            root: __dirname
        });
    });
});

app.listen(app.get('config').PORT, (err) => {
    console.log(chalk.bgGreen("Server started at port ", app.get('config').PORT));
});

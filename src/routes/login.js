const app = require("express").Router();
const config = require("../config");

app.get("/login", (req, res) => {
    res.render("loginOptions.ejs", {
        name: config.webData.defaultName,
        favicon: config.webData.favicon,
    });
});

module.exports = app;
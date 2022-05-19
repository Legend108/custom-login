const express = require("express");
const app = express.Router();
const config = require("../config");
const qs = require("node:querystring");

app.get("/home", (req, res) => {
    const cleaned = req.url.replace("home?", "");
    const urlObject = qs.parse(cleaned);
    let sid = urlObject['/t'];
    console.log(sid);
    console.log(urlObject);

    if (sid !== "") {
        try {
            const file = require("../sessions/" + sid + ".json");

            if(file.emailVerificationPending) {
                res.render("home" + config.ext, {
                    name: config.webData.defaultName,
                    favicon: config.webData.favicon,
                    verification: true,
                    username: file.username,
                    eID: file.email,
                    web: config.website
                });
            } else {
                res.render("home" + config.ext, {
                    name: config.webData.defaultName,
                    favicon: config.webData.favicon,
                    verification: false,
                    username: file.username,
                    eID: file.email,
                    web: config.website
                });
            }
        } catch (err) {
            res.render("home" + config.ext, {
                name: config.webData.defaultName,
                favicon: config.webData.favicon,
                verification: false,
                username: false,
                eID: false,
                web: config.website
            });
        }
    } else {
        res.render("home" + config.ext, {
            name: config.webData.defaultName,
            favicon: config.webData.favicon,
            verification: false,
            username: false,
            eID: false,
            web: config.website
        });
    }
});

module.exports = app;
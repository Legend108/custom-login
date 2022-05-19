const app = require("express").Router();
const qs = require("querystring");

app.get("/", (req, res) => {
    const cleaned = req.url.replace("?", "");
    const urlObject = qs.parse(cleaned);
    console.log(urlObject);

    if(urlObject.t) {
        res.redirect("/home?t=" + t);
    } else {
        res.redirect("/home?t=ABC");
    }

});

module.exports = app;
const app = require("express").Router();
const config = require("../config");

app.get("/pendingAccountCreations/email/:sID", (req, res) =>{ 
    const id = req.params.sID;

    try {
        var file = require(`../sessions/${id}.json`);

        if(file.emailVerificationPending) {
            file.emailVerificationPending = false;
            res.send(`Email ID has been verified succesfully! <a href="${config.website}/home?t=${id}">Use!</a>`);
        } else {
            res.send("It is already verified!");
        }
    } catch (err) {
        console.log("This session doesn't exist!");
        res.send("Invalid session ID!");
    }
});

module.exports = app;
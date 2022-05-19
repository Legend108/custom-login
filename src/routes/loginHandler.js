const app = require("express").Router();
const config = require("../config");
const User = require("../models/user");
const fs = require("node:fs");
const util = require("../utils/Util");
const nodemailer = require('nodemailer');

app.post("/create/account", async (req, res) => {
    const sessionID = util.session();

    const params = req.body;

    console.log(req.body);

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    try {
        var save = await User.create({
            username: username,
            email: email,
            password: password
        });
    } catch(err) {
        if(err.name == "SequelizeUniqueConstraintError") {
            res.send("Email already exists!");
        }
    }

    var check = save instanceof User;

    if (check) {
        fs.appendFileSync("./src/sessions/" + sessionID + ".json", `{"username": "${params.username}","email": "${params.email}","password": "${params.password}","emailVerificationPending": true}`, "UTF-8")
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.emailSettings.emailID,
                pass: config.emailSettings.emailPass
            }
        });

        var mailOptions = {
            from: config.emailSettings.emailID,
            to: save.email,
            subject: "Attempt in creating an account",
            html: config.emailSettings.emailData(sessionID),
        };

        console.log(config.emailSettings.emailData(sessionID));

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);

                res.send("Provide a valid Email ID next time!");
            } else {
                console.log('Email sent succesfully: ' + info.response);

                res.send("Email has been sent! Please verify");
            }
        });
        console.log(save.toJSON());
    }

});



module.exports = app;
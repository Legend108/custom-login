const { DataTypes } = require("sequelize");
const sql = require("../sequelize");

const User = sql.define("user", {
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    }
});

module.exports = User;
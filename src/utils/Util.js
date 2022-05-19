const config = require("../config");

exports.session = () => {
    const chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    const length = config.sessionSettings.sessionIdLength;
    
    let id = "";
    
    for(let i = 0; i < length; ++i) {
        var randomID = chars[Math.floor(Math.random() * chars.length)];
        id += randomID;
    }

    return id;
};
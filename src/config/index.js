// Config file, contains all data basically. (Not database)

module.exports = {
    PORT: "3001",
    viewsDirectory: "./src" + "/views",
    engine: require("ejs").renderFile,
    website: "http://localhost:3001",
    ext: ".ejs",
    basePath: process.cwd(),
    webData: {
        defaultName: "Desalite Forums",
        iconPath: "./src/assets/grief.jpg",
        favicon: "/assets/grief.jpg",
        css: "./src/assets/all.css"
    },
    emailSettings: {
        emailID: "mousumisamaddar13557@gmail.com",
        emailPass: "DEADPOOL2000T",
        emailData: (sID) => {
            return `
            <h3>Verify your Email</h3>
            <p>Click on the button below to verify!</p>
            <br />
            <a href="http://localhost:3001/pendingAccountCreations/email/${sID}" target="_blank">Go</a>
            `;
        }
    },
    sessionSettings: {
        sessionIdLength: 12,
    }
};
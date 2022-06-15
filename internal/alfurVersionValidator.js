const changelog = require("./changelog.json");
const pjson = require("../package.json");

if(changelog.version > pjson.version) {} else {
    console.log("Please update internal/changelog.json before pushing a new build!\n");
    process.exit(1);
}
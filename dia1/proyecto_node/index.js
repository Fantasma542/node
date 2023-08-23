const writeAndRead = require("./writeAndReadObject");
const readConsole = require("./readConsole");

readConsole((data) => {
    console.log(data);
    writeAndRead("reto4.json", data);
});
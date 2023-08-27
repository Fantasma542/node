const writeAndRead = require("./writeAndReadObject");
const pregunta = require("./readConsole")

pregunta((data) => {
    console.log(data);
    writeAndRead("reto4.json", data);
});
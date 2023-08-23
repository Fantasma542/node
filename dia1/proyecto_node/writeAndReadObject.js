const fs = require("fs");

function writeAndRead(path, obj) {
    fs.writeFile(path, JSON.stringify(obj), (err) => {
        if (err) {
            console.log(`Error: ${err}`);
        }

            fs.readFile(path, "utf-8", (err, data) => {
                if (!err) {
                    console.log(data);
                } else {
                    console.log(`Error: ${err}`);
                }
            });
    });
}

module.exports = writeAndRead;
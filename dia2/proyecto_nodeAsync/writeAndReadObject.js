const fs = require("fs/promises");
//////// Async y await
async function writeAndRead(path, obj) {
        try {
            await fs.writeFile(path, JSON.stringify(obj)); // Espera a que se complete la escritura
            const nuevo = await fs.readFile(path, 'utf8'); // Espera a que se complete la lectura
            console.log(JSON.parse(nuevo));
        } catch (error) {
            console.log(error);
        }
    }
module.exports = writeAndRead;
const fs = require("fs");
const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

let object = {
    name: "",
    surname: "",
    age: null
};

rl.question("¿Cual es tu nombre? ", (nombre) => {
    object.name = nombre;
    
    rl.question("¿Cual es tu apellido? ", (apellido) => {
        object.surname = apellido;
    
        rl.question("¿Cual es tu edad? ", (edad) => {
            object.age = edad;
            rl.close();
            
            const archivoJson = "reto3.json";
            
            fs.writeFile(archivoJson, JSON.stringify(object), (err) => {
                if (err) {
                    console.log(`Error: ${err}`);
                }
                    
                fs.readFile(archivoJson, "utf-8", (err, data) => {
                    if (!err) {
                            console.log(data);
                    } else {
                            console.log(`Error: ${err}`);
                    }
                });
            });
        });
    });
});
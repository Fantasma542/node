const readline = require("readline");

//////////////////////////promesass 
//////////////then y catch

function read(pregunta) {
    const question =  new Promise((resolve, reject) => {
        const rl = readline.createInterface(process.stdin, process.stdout)

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question
}

function pregunta(callback) {
    const persona = { nombre: "", apellido: "", age: null };

    read("¿Cual es tu nombre? ")
        .then((nombre) => {
            persona.nombre = nombre;
            
            return read("¿Cual es tu apellido? ");
        })
        .then((apellido) => {
            persona.apellido = apellido;

            return read("¿Cuál es tu edad? ");
        })
        .then((edad) => {
            persona.age = edad;

            callback(persona);
        })
        .catch((err) => {
            console.error(err);
        });
}


module.exports = pregunta;
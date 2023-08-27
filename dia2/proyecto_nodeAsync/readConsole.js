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

async function pregunta(callback) {
    const persona = { nombre: "", apellido: "", age: null };

    try {
        persona.nombre = await read("¿Cual es tu nombre? ");
        persona.apellido = await read("¿Cual es tu apellido? ");
        persona.age = await read("¿Cuál es tu edad? ");

        callback(persona);
    } catch (err) {
        console.error(err);
    }
}

module.exports = pregunta;
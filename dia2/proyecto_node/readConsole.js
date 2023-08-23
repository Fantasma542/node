const readline = require("readline");



function pregunta(callback){
    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface(process.stdin, process.stdout)

        let object = {
                    name: "",
                    surname: "",
                    age: null
                };
        rl.question("¿Cual es tu nombre? ", (nombre)=>{
            resolve(object.name = nombre)
            rl.question("¿Cual es tu apellido? ", (apellido) => {
                resolve(object.surname = apellido) 
                rl.question("¿Cual es tu edad? ", (edad) =>{
                    resolve(object.age = edad)
                    rl.close();
                    callback(object)
                })
            })
        })
    })
    return question
}

// function readConsole(callback) {
//     let rl = readline.createInterface(process.stdin, process.stdout);

//     let object = {
//         name: "",
//         surname: "",
//         age: null
//     };

//     rl.question("¿Cual es tu nombre? ", (nombre) => {
//         object.name = nombre;
//         rl.question("¿Cual es tu apellido? ", (apellido) => {
//             object.surname = apellido;
//             rl.question("¿Cual es tu edad? ", (edad) => {
//                 object.age = edad;
//                 rl.close();
//                 callback(object);
//             });
//         });
//     });
// }

module.exports = pregunta;
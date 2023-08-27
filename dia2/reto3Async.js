const fs = require("fs/promises");
const readline = require("readline");

let object = {
    name: "",
    surname: "",
    age: null
};

function pregunta(){
    const question = new Promise((resolve, reject) =>{
        const rl = readline.createInterface(process.stdin, process.stdout)
        rl.question("¿Cual es tu nombre? ", (nombre)=>{
            resolve(object.name = nombre)
            rl.question("¿Cual es tu apellido? ", (apellido) => {
                resolve(object.surname = apellido) 
                rl.question("¿Cual es tu edad? ", (edad) =>{
                    resolve(object.age = edad)
                    rl.close()
                    const archivoJson = "reto3Async.json"


                    /////////////promesas
                     /////////////Async y await
                    async function asyncAwait(obj){
                        try{
                            fs.writeFile(archivoJson, JSON.stringify(obj))
                    const nuevo = await fs.readFile(archivoJson, 'utf8')
                    console.log(JSON.parse(nuevo))
                    }
                    catch(error){
                        console.log(error)
                    }
                        }
                    
                    asyncAwait(object)
                                })
                        })
                    })
                    }
    ) 
return question
}
pregunta()


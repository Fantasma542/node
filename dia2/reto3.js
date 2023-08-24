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
                    const archivoJson = "reto3.json"


                    /////////////promesas

                    //////////Then y catch
                    fs.writeFile(archivoJson, JSON.stringify(object))
                    .then(()=> {
                        return fs.readFile(archivoJson, 'utf8')
                    })
                    .then( (data)=> {
                        console.log(JSON.parse(data))
                    })
                    .catch((err) =>{
                        console.log(err);
                    })

                    ///////////////async y await
                    async function asyncAwait(){
                        fs.writeFile(archivoJson, JSON.stringify(object))
                        const nuevo = await fs.readFile(archivoJson, 'utf8')
                        console.log(JSON.parse(nuevo))
                        }
                        
                        asyncAwait()
                                })
                        })
                    })
                    }
    ) 
return question
}
pregunta()


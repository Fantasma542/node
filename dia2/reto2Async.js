const fs = require("fs/promises")

let object ={
    name: "Juan Ángel",
    surname: "Moldovan Pop",
    age: 18
}

const archivoJson = "reto2Async.json"


/////////////promesas


/////// ASYNC Y AWAIT

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

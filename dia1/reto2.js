const fs = require("fs")

let object ={
    name: "Juan Ángel",
    surname: "Moldovan Pop",
    age: 18
}

const archivoJson = "reto2.json"

fs.writeFile(archivoJson, JSON.stringify(object),(err)=>{
    if (err) {
        console.log(`Error: ${err}`)
    }
})

// fs.readFile(archivoJson, (err, data)=>{
//     if(!err){
//         console.log(data);
//     } else{
//     console.log(`Error: ${err}`)
//     }
// })

fs.readFile(archivoJson, "utf-8", (err, data)=>{
    if(!err){
        console.log(data);
    } else{
    console.log(`Error: ${err}`)
    }
})



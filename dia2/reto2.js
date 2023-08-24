const fs = require("fs/promises")

let object ={
    name: "Juan Ángel",
    surname: "Moldovan Pop",
    age: 18
}

const archivoJson = "reto2.json"


/////////////promesas

/////////THEN Y CATCH
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

/////// ASYNC Y AWAIT

async function asyncAwait(){
fs.writeFile(archivoJson, JSON.stringify(object))
const nuevo = await fs.readFile(archivoJson, 'utf8')
console.log(JSON.parse(nuevo))
}

asyncAwait()




























/////////callbacks
// fs.writeFile(archivoJson, JSON.stringify(object),(err)=>{
//     if (err) {
//         console.log(`Error: ${err}`)
//     }
// })

// // fs.readFile(archivoJson, (err, data)=>{
// //     if(!err){
// //         console.log(data);
// //     } else{
// //     console.log(`Error: ${err}`)
// //     }
// // })

// fs.readFile(archivoJson, "utf-8", (err, data)=>{
//     if(!err){
//         console.log(data);
//     } else{
//     console.log(`Error: ${err}`)
//     }
// })



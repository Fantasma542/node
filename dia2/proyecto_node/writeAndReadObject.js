const fs = require("fs/promises");

/////then y catch

// function writeAndRead(path, obj) {
//     fs.writeFile(path, JSON.stringify(obj))
// .then(()=> {
//     return fs.readFile(path, 'utf8')
// })
// .then( (data)=> {
//     console.log(JSON.parse(data))
// })
// .catch((err) =>{
//     console.log(err);
// })

// }
//////// Async y await
function writeAndRead(path, obj){
    async function asyncAwait(){
        fs.writeFile(path, JSON.stringify(obj))
        const nuevo = await fs.readFile(path, 'utf8')
        console.log(JSON.parse(nuevo))
        }
        
        asyncAwait()
}




module.exports = writeAndRead;
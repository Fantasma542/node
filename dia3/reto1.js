const express = require("express");
const app = express();

app.get("/", function (req, res){
    console.log("Petición recibida del cliente")
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers["user-agent"])

    let aplicationJSON = {
        ok: true,
        message: "Recibido!"
    }
});

app.get("/bye", function(req, res){
    let aplicationJSON = {
        ok:true,
        message: "Adios!"
    }
})



app.listen(3000)
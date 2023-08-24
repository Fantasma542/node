const Book = require("../models/book.model")
let book = Book
book = null
function getStart(req, res){
    let respuesta = {error: false, codigo: 200, message: 'Punto de Inicio'}
    res.send(respuesta)
}

function getBook(req, res){
    let respuesta;
    if(book != null){
        respuesta = {error: false, codigo: 200, data: book}
    } else{
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    }
    res.send(respuesta)
}
function postBook(req, res){
    let respuesta;
    if(book === null ){
        book = {title: req.body.title,
                author: req.body.author,
                id_book: req.body.id_book}
        respuesta = {error: false, codigo: 200, mensaje: "Libro creado", data: book}
    }
    else {
        respuesta = {error: true, codigo: 200, mensaje: "Libro ya existe"}
    }
    res.send(respuesta);
}
function putBook(req, res){
    let respuesta;
    if(book != null ){
        book.title = req.body.title1
        book.author = req.body.author1
        book.id_book = req.body.id_book1
        respuesta = {error: false, codigo: 200, mensaje: "Libro actualizado", data: book}
    }
    else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe", data: book}
    }
    res.send(respuesta);
}
function deleteBook(req, res){
    let respuesta;
    if(book != null ){
        book = null
        respuesta = {error: false, codigo: 200, mensaje: "Libro borrado", data: book}
    }
    else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe", data: book}
    }
    res.send(respuesta);
}





module.exports = {getStart, getBook, postBook, putBook, deleteBook};
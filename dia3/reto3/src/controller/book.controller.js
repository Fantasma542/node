const Book = require("../models/book.model")
let book = Book
book = [];



function getStart(req, res){
    let respuesta = {error: false, codigo: 200, message: 'Punto de Inicio'}
    res.send(respuesta)
}

// function getBook(req, res){
//     let respuesta;
//     if(book != null){
//         respuesta = {error: false, codigo: 200, data: book}
//     } else{
//         respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
//     }
//     res.send(respuesta)
// }
function getBookId(req, res){
    let id_book = req.query.id_book
    let respuesta;
    if(id_book){
        const books = book.find(book => book.id_book === parseInt(id_book));
        if (books) {
            respuesta = {error: false, codigo: 200, data: book}
        } else{
            respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
        }
    } else {
        respuesta = {error: false, codigo: 200, data: book}
    }
    res.send(respuesta)
    
}




function postBook(req, res){
    let title= req.body.title
    let author= req.body.author
    let id_book= req.body.id_book
        let newBook = new Book(id_book, title, author)
        book.push(newBook);
        let respuesta;
        respuesta = {error: false, codigo: 200, mensaje: "Libro creado", data: newBook}
        res.send(respuesta);
}
function putBook(req, res){
    let title= req.body.title
    let author= req.body.author
    let id_book= req.body.id_book
    const books = book.find(book => book.id_book === id_book)

    let respuesta;
    if(books){
        books.title = title
        books.author = author
        respuesta = {error: false, codigo: 200, mensaje: "Libro actualizado", data: books}
    }
    else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe", data: books}
    }
    res.send(respuesta);
}


function deleteBook(req, res){
    let id_book = req.body.id_book
    const bookIndex = book.findIndex(book => book.id_book === id_book);
    let respuesta;
    if(bookIndex !== -1 ){
        const deletedBook = book.splice(bookIndex, 1);
        respuesta = {error: false, codigo: 200, mensaje: "Libro borrado", data: deletedBook[0]}
    }
    else {
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe", data: book}
    }
    res.send(respuesta);
}





module.exports = {getStart, postBook, putBook, deleteBook, getBookId};
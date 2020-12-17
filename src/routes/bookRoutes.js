const express = require('express');

const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');
function router(nav){
    // var books = [
    //     {
    //         title: 'Tom and jerry',
    //         author: 'Joseph barbera',
    //         genre: 'Cartoon',
    //         img: "tj.jpg"
    //     },
    //     {
    //         title: 'Harry Potter',
    //         author: 'J.K rowling',
    //         genre: 'Fantasy',
    //         img: "harry.jpg"
    //     },
    //     {
    //         title: 'The jungle book',
    //         author: 'Rudyard kipling',
    //         genre: 'Cartoon',
    //         img: "jg.jpg"
    //     },
    //     {
    //         title: 'A tale of two cities',
    //         author: 'Charles Dickens',
    //         genre: 'Novel',
    //         img: "city.jpg"
    //     }
    // ]
    
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
        });
        
 
    });
    });
    
    booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){
        res.render('book',{
            nav,
             title:'Library',
             book
      });
    
     });
    });
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.remove({_id:id},function(err,red){
            res.redirect("/books");
        })
        
    });
    booksRouter.get('/update/id',function(req,res){
        const id = req.params.id;
        res.redirect("/updatebook");
    });

    return booksRouter;
    
}

module.exports = router;
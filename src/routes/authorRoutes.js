const express = require('express');

const authorsRouter = express.Router();
const authordata = require('../model/authordata');
function router(nav){
    authorsRouter.get('/',function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
        });
        
 
    });
    });
    
    authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    authordata.findOne({_id:id})
    .then(function(author){
        res.render('author',{
            nav,
             title:'Library',
             author
      });
    
     });
    });

    authorsRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        authordata.remove({_id:id},function(err,red){
            res.redirect("/authors");
        })
        
    });
    authorsRouter.get('/update/:id',function(req,res){
        const id = req.params.id;
        res.redirect("/updateauthor");
    });


    return authorsRouter;
    
}

module.exports = router;
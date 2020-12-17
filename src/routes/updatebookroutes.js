
const express = require('express');
const updatebookroutes =express.Router();
const Bookdata = require('../model/bookdata');

function router(nav){
    updatebookroutes.get('/',function(req,res){
        res.render('updatebook',{
            nav,
            title: 'Library'
        })
    })
    updatebookroutes.post('/update',function(req,res){
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
        var title = req.body.title;
        Bookdata.updateOne({title:title},{$set:item},function(err,red){
            res.redirect('/books');

        })
    //    author.save(); //saving to db
        
    
        
});

    return updatebookroutes;
}

module.exports = router;

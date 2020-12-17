
const express = require('express');
const adminsRoutes =express.Router();
const Authordata = require('../model/authordata');
 
function router(nav){
 adminsRoutes.get('/',function(req,res){
    res.render('addauthor',{
        nav,
        title: 'Library'
    })
})
adminsRoutes.post('/add',function(req,res){
    var item={
        title:req.body.title,
        country:req.body.country,
        field:req.body.field,
        image:req.body.image
    }

   var author =  Authordata(item)
   author.save(); //saving to db
   res.redirect('/authors');
});
return adminsRoutes;
}
module.exports = router;
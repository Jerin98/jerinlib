const express = require('express');
const signupRoutes = express.Router();
const Signupdata = require('../model/signupdata');
function router(nav){

signupRoutes.get('/',function(req,res){
    res.render("signup",
    {
        nav,
        title:'SIGNUP'
        
    });
});
signupRoutes.post('/add',function(req,res){
    var item={
        email:req.body.email,
        mobile:req.body.mobile,
        password:req.body.password,
        passwordconf:req.body.passwordconf
    }

   var signup =  Signupdata(item)
   signup.save(); //saving to db
   res.redirect('/books');
})
return signupRoutes;
}
module.exports = router;

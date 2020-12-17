const express = require('express');
const loginRouter = express.Router();
const Logindata = require('../model/logindata');
function router(nav){

loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav,
        title:'LOGIN'
        
    });
});
loginRouter.post('/add',function(req,res){
    var item={
        email:req.body.email,
        password:req.body.Password
       
    }

   var login =  Logindata(item)
   login.save(); //saving to db
   res.redirect('/books');
})

return loginRouter;
}
module.exports = router;
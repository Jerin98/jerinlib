const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.rlm8x.mongodb.net/lib?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    email:String,
    Password:String
   
});

var Logindata = mongoose.model('logindata',LoginSchema);

module.exports = Logindata;
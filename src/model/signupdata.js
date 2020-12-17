const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.rlm8x.mongodb.net/lib?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    mobile:String,
    password:String,
    passwordconf:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    email:String,
    mobile:String,
    password:String,
    passwordconf:String
});

var Signupdata = mongoose.model('signupdata',SignupSchema);

module.exports = Signupdata;
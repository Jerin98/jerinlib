const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.rlm8x.mongodb.net/lib?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    title:String,
    country:String,
    field:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
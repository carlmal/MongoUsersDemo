// import mongoose library
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema
const UserSchema = new Schema({
    name: String
});

// create user collection in mongo
const User = mongoose.model('user',UserSchema);

// make user available to other objects
module.exports = User;
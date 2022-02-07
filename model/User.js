const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        min: 3,
        max: 255
    },
    Points: {
        type: Number,
        default: 0
    },
    Wins: {
        type: Number,
        default: 0
    }
 
    
}, {collection: "users"});

 const Users = mongoose.model('user', userSchema)

module.exports = Users;
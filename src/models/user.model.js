const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        // unique:true,
        lowercase: true,
    }
    // + lastname + email + password + isAdmin 
});

module.exports = mongoose.model('User', userSchema);
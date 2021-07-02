const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    age: {type: Number, default: 18 }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
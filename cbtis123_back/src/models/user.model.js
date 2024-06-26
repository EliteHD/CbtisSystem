const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0 ,
    },
}, { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

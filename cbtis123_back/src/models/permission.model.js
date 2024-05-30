
const mongoose = require('mongoose');


const permissionSchema = new mongoose.Schema({
    permission_name: {
        type: String,
        required: true,
        unique: true,
    },
    permission_description: {
        type: String,
    },
    is_default: {
        type: Number,
        default: 0,
    },

}, {
    timestamps: true
});

module.exports = mongoose.model('Permission', permissionSchema);
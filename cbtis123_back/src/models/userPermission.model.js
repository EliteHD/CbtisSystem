
const mongoose = require('mongoose');

const userPermissionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
    permissions: {
        persission_name: String,
        permission_description: String,
        permission_value: [Number],
    },
}, { timestamps: true }
);

module.exports = mongoose.model('UserPermission', userPermissionSchema);
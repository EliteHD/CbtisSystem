const { z } = require('zod');

const permissionSchema = z.object({
    permission_name: z.string({
        required_error: 'Permission name is required'
    }),
    permission_description: z.string({
        required_error: 'Permission description is required'
    }),
});

//objet for delete permission
const deletePermissionSchema = z.object({
    permission_id: z.string({
        required_error: 'Permission id is required'
    }),
});


module.exports = {
    permissionSchema
};


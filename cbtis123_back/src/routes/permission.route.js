const { Router } = require('express');
const router = Router();
const validatorSchema = require('../middleware/validator.middleware');
const { addPermission, getPermissions, getPermission, updatePermission, deletePermission } = require('../controllers/permission.controller');
const { permissionSchema, deletePermissionSchema } = require('../schemas/permission.shema');
const authRequired = require('../middleware/validateToken');


router.post('/permission-add', authRequired, validatorSchema(permissionSchema), addPermission);
router.get('/permissions', authRequired, getPermissions);
router.get('/permission/:id', authRequired, getPermission);
router.put('/permission-update/:id', authRequired, validatorSchema(permissionSchema), updatePermission);
router.delete('/permission-delete/:id', authRequired, deletePermission, validatorSchema(deletePermissionSchema));

module.exports = router;






const {Router} = require('express');
const {login, register} = require('../controllers/auth.controller');
const router = Router();

router.post('/signup', register);

router.post('/signin', login);

module.exports = router;






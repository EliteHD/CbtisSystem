const { Router } = require('express');
const { login, register, logout, profile } = require('../controllers/auth.controller');
const router = Router();
const authRequired = require('../middleware/validateToken');

router.post('/register', register);

router.post('/login', login);

router.post('/logout', logout);

router.get('/profile', authRequired, profile);

module.exports = router;






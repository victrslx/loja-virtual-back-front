const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const RegisterController = require('../controllers/RegisterController');

router.post('/login', AuthController.login);
router.post('/register', RegisterController.register);

module.exports = router;

const express = require('express');
const router = express.Router();
const CartController = require('../controllers/CartController');
const verificarToken = require('../middlewares/auth.middleware');

router.get('/', verificarToken, CartController.list);

router.post('/', verificarToken, CartController.add);

module.exports = router;



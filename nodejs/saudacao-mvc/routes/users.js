const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get("/", usersController.index);
router.get("/formLogin", usersController.formulario);
router.post('/login', usersController.login);

module.exports = router;

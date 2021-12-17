const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../helpers/verifyToken');

router.get('/get-user',verifyToken ,userController.getUser);
router.post('/register', userController.register);
router.post('/login', userController.login);

//Créer route pour l'update d'un client
module.exports = router;
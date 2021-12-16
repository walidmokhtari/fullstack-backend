const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
router.post('/register', userController.register);
//Créer route pour l'update d'un client
module.exports = router;
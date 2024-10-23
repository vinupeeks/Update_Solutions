const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/users', userController.createUser);

router.post('/users', userController.createUser);


module.exports = router;

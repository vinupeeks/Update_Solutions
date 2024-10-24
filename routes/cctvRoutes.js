const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/save', userController.serviceCreation);

// router.post('/users', userController.createUser);


module.exports = router;

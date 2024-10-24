const express = require('express');
const router = express.Router();
const accessoryController = require('../controllers/accessoryController');

router.post('/accessory/save', accessoryController.addAccessory);

// router.post('/users', userController.createUser);


module.exports = router;

const express = require('express');
const router = express.Router();
const multerconfigure = require('../middleware/multerConfig')
const accessoryController = require('../controllers/accessoryController');


router.post('/admin/save', multerconfigure.single('image'),accessoryController.addAccessory);
router.get('/user/get',accessoryController.getAccessory)

// router.post('/users', userController.createUser);


module.exports = router;

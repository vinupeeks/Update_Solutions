const express = require('express');
const router = express.Router();
const multerconfigure = require('../middleware/multerConfig')
const accessoryController = require('../controllers/accessoryController');


router.post('/admin/save', multerconfigure.single('image'),accessoryController.addAccessory);
router.get('/user/get',accessoryController.getAccessory)
router.get('/user/get/:id', accessoryController.getViewAccessory);
router.put('/admin/update/:id',multerconfigure.single('image'),accessoryController.updateAccessory)
router.delete('/admin/delete/:id',accessoryController.deleteAccessory)


// router.post('/users', userController.createUser);


module.exports = router;

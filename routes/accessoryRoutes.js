const express = require('express');
const router = express.Router();
const multerconfigure = require('../middleware/multerConfig')
const accessoryController = require('../controllers/accessoryController');


router.post('/admin/save', multerconfigure.array('image', 5), accessoryController.addAccessory);
router.get('/user/get',accessoryController.getAccessory)
router.get('/user/get/:id', accessoryController.getViewAccessory);
router.put('/admin/update/:id',multerconfigure.array('image', 5),accessoryController.updateAccessory)
router.delete('/admin/delete/image/:id',accessoryController.deleteAccessoryImage)
router.delete('/admin/delete/:id',accessoryController.deleteAccessory)
router.post('/user/order/:id',accessoryController.addorderDetails)
router.get('/admin/view/order',accessoryController.getOrderDetails)
router.put('/admin/update/status/:id',accessoryController.updateOrderStatus)
router.get('/user/view/counts',accessoryController.getCounts)



// router.post('/users', userController.createUser);


module.exports = router;

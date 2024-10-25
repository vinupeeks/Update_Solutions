const express = require('express');
const router = express.Router();
// const userController = require('../controllers/userController.js');
const cctvController = require('../controllers/cctv_AcDetailController');

// router.post('/save', userController.serviceCreation);

// router.post('/users', userController.createUser);

// add cctv service
router.post('/users/cctv/service/add',cctvController.addcctvDetails)
// add ac service
router.post('/users/ac/service/add',cctvController.addACDetails)
// get ac-cctv service
router.get('/admin/services',cctvController.getAc_CctvDetails)
// update service status
router.put('/service/status/:id',cctvController.updateService)
// delete service status
router.delete('/delete/service/:id',cctvController.deleteService)

module.exports = router;

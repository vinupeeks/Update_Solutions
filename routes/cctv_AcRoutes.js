const express = require('express');
const router = express.Router();
// const userController = require('../controllers/userController.js');
const cctvController = require('../controllers/cctv_AcDetailController');

// router.post('/save', userController.serviceCreation);

// router.post('/users', userController.createUser);
router.post('/users/cctv/service/add',cctvController.addcctvDetails)
router.post('/users/ac/service/add',cctvController.addACDetails)
router.get('/admin/services',cctvController.getAc_CctvDetails)

module.exports = router;

const express = require('express');
const router = express.Router();
const cctvController = require('../controllers/cctv_AcDetailController');
const { jwtAuth, isAdmin } = require('../middleware/authMiddleware');



// add cctv service
router.post('/users/cctv/service/add',cctvController.addcctvDetails)
// add ac service
router.post('/users/ac/service/add',cctvController.addACDetails)
// get ac-cctv service
router.get('/admin/services',jwtAuth,isAdmin,cctvController.getAc_CctvDetails)
// update service status
router.put('/service/status/:id',jwtAuth,isAdmin,cctvController.updateService)
// delete service status
router.delete('/delete/service/:id',jwtAuth,isAdmin,cctvController.deleteService)

module.exports = router;

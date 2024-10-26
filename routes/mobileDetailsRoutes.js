const express=require ('express')
const multerconfigure = require('../middleware/multerConfig')
const router=new express.Router()
const mobileDetailController=require('../controllers/mobileDetailController')
const { jwtAuth, isAdmin } = require('../middleware/authMiddleware');

// post mobile service details with user and mobile details
router.post('/add/service',multerconfigure.single('mobile_img'),mobileDetailController.addMobileDetails)

// get mobile service details
router.get('/get/service',jwtAuth,isAdmin,mobileDetailController.getMobileDetails)

// update mobileservice status
router.put('/update/status/:id',jwtAuth,isAdmin,mobileDetailController.updateMobileService)

// delete service
router.delete('/delete/service/:id',jwtAuth,isAdmin,mobileDetailController.deleteMobileService)


module.exports = router;

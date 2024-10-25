const express=require ('express')
const multerconfigure = require('../middleware/multerConfig')
const router=new express.Router()

const mobileDetailController=require('../controllers/mobileDetailController')

// post mobile service details with user and mobile details
router.post('/add/service',multerconfigure.single('mobile_img'),mobileDetailController.addMobileDetails)

// get mobile service details
router.get('/get/service',mobileDetailController.getMobileDetails)

// update mobileservice status
router.put('/update/status/:id',mobileDetailController.updateMobileService)

// delete service
router.delete('/delete/service/:id',mobileDetailController.deleteMobileService)


module.exports = router;

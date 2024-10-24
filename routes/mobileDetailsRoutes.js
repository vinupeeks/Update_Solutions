const express=require ('express')
const multerconfigure = require('../middleware/multerConfig')
const router=new express.Router()

const mobileDetailController=require('../controllers/mobileDetailController')

// post mobile service details with user and mobile details
router.post('/add/mobile',multerconfigure.single('mobile_img'),mobileDetailController.addMobileDetails)

// get mobile service details
router.get('/get/mobile',mobileDetailController.getMobileDetails)

module.exports = router;
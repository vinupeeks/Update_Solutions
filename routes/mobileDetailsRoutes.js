const express=require ('express')
const multerconfigure = require('../middleware/multerConfig')
const router=new express.Router()

const mobileDetailController=require('../controllers/mobileDetailController')

router.post('/add/mobile',multerconfigure.single('mobile_img'),mobileDetailController.addMobileDetails)

module.exports = router;
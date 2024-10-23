const express=require ('express')
const multerconfigure = require('../middleware/multerConfig')
const router=new express.Router()

const mobileDetailController=require('../controllers/mobileDetailController')

router.post('/user/',multerconfigure.single('image'),mobileDetailController.addMobileDetails)

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/accessoryCategoryController');

// add category
router.post('/admin/add',categoryController.addCategory);
router.get('/view',categoryController.getCategories)
router.put('/admin/update/:id',categoryController.updateCategory)
router.delete('/admin/delete/:id',categoryController.deleteCategory)


// router.post('/users', userController.createUser);


module.exports = router;

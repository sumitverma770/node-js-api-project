const express =require ('express');
const router =express.Router();
const categoryController =require ('../controller/category')

router.post('/categories', categoryController.createCategory);
router.get('/categories', categoryController.getCategory);
router.get('/categories', categoryController. getAllCategory);


module.exports = router;

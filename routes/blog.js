const express = require('express');
const router = express.Router();
const blogController = require('../controller/Blog')


router.post('/blog', blogController.createBlog);
router.put('/blog/_id', blogController.updateBlog);
router.get('/blog',blogController.getBlog);
router.get('/blog/_id',blogController.getBlogs);
router.delete('/blog',blogController.deleteBlog)

module.exports = router;

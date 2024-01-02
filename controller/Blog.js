const blog = require("../models/Blog")

//create blog 

const createBlog = async (req, res) => {
    try {
        const { title, description, author } = req.body;
        const newPost = new blog({ title, description, author });
        const savePost = await newPost.save();
        res.status(201).json({ message: 'Blog post created successfully!', post: savePost });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server Error' })
    }

}

//update the blog

const updateBlog = async (req, res) => {
    try {
        const id = req.query.id;
        const { title, description, author } = req.body;

        const updatePost = await blog.findByIdAndUpdate(
            id,
            { title, description, }, { new: true }
        );

        if (updatePost !== null) {
            res.json({ message: 'Blog post updated successfully!', post: updatePost })
        } else {
            res.status(400).json({ error: 'Post not found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

//all the get blog
const getBlog = async (req, res) => {
    try {
        const blogPost = await blog.find();
        res.json(blogPost);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' })
    }

}


//get by id blog


const getBlogs = async (req, res) => {
    try {
        const id = req.query.id
        const blogPost = await blog.findById(id)
        if (blogPost) {
            // Send only the necessary information in the response
            const { id, title, description, author } = blogPost;
            res.json({ id, title, description, author });
        }
        else {
            res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' })
    }

}

//delete blog

const deleteBlog = async (req, res) => {

    try {
        const id = req.query.id
        const deleteBlog = await blog.findByIdAndDelete(id)
        if (deleteBlog) {
            res.status(200).json({ message: 'Blog post deleted successfully!' })
        } else {
            res.staus(400).json({ message: 'Blog post not found' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server erroe' })
    }


}



module.exports = {
    createBlog,
    updateBlog,
    getBlog,
    getBlogs,
    deleteBlog,
}

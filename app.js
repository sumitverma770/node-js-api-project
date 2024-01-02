const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const Database = require('./Database/db');
const categoryRoute = require('./routes/category')
const blogRoute= require ('./routes/blog')




//body-parse
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())


// Define a route for the category
app.use('/category', categoryRoute)

//define a route for the blog
app.use('/blogs',blogRoute)

app.get('/blog', (req, res) => {
    res.status(200).json({
        msg: 'blog get requset'
    })

})



module.exports = app;
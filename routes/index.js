const express = require("express");
const router = express.Router();
const db = require('../config/database');


// Display post
router.get('/', (req, res) => {
    
})

// Add a post
router.post('/addblog', (req, res) => {
    const data ={
        title: 'Why I like coding',
        description: 'Just like architecture, which is an art used by people daily and affects their everyday life, so is code. You can create something and people interact with, use, touch and work with. That is an amazing feeling.'
        
    }

    let { title, description } = data;

// Insert into table
Blog.create({
    title: title,
    description: description
     }).then(())
     .catch((err) => console.log(err));

});


module.exports = router;
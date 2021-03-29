const { Blog } = require('../models');

const blogData = [
    {
        title: "Why code?",
        blog_content: " It is using a language that a computer understands to give a computer instructions in order to perform specific functions",
        user_id: 3
    },
    {
        title: "Which developers get paid the most",
        blog_content: "In terms of skills, iOS, Android, Python, and JavaScript developers in the US are the highest-paid.",
        user_id: 1

    },
    {
        title: "Why is coding so hard",
        blog_content: "Adults went to school learning about all the things they thought they'd ever need to learn about, and coding wasn't one of those things.",
        user_id: 2
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
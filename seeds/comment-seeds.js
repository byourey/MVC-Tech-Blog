const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        blog_id: 5,
        comment_text: "I want to get paid a lot of money"
    },
    {
        user_id: 4,
        blog_id: 4,
        comment_text: "I love working from home!"
    },
    {
        user_id: 3,
        blog_id: 5,
        comment_text: "I hope i love coding"
    },
    {
        user_id: 2,
        blog_id: 2,
        comment_text: "I never knew anything about coding"
    },
    
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
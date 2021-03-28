const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    // console.log('');
    Blog.findAll({
        attributes: [
            'id',
            'title',
            'created_at',
            'post_content'
        ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        },
      ]
    })
      .then(dbBlogData => res.json(dbBlogData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Blog.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'No blog found' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

router.post('/', withAuth, (req, res) => {
    Blog.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id
    })
      .then(dbBlogData => res.json(dbBlogData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});


  router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbBlogData => {
        if (!dbBlogData) {
          res.status(404).json({ message: 'Never found any blog' });
          return;
        }
        res.json(dbBlogData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

  module.exports = router;
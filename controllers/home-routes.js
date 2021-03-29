const router = require('express').Router();

router.get('/', async (req, res) => {
  // I'm able to get this route working only for now
  res.render('homepage');
});

module.exports = router;
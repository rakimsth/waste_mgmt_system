const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Hello World from API!!');
});

module.exports = router;

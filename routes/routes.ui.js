const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Hello World from UI Side!!');
});

module.exports = router;

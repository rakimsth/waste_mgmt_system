const router = require('express').Router();
const Controller = require('./user.controller');

// create User
router.post('/', async (q, r, n) => {
  const payload = q.body || {};
  Controller.add(payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list User
router.get('/', async (q, r, n) => {
  Controller.list()
    .then(d => r.json(d))
    .catch(e => n(e));
});

// update User

router.put('/:id', async (q, r, n) => {
  const payload = q.body;

  Controller.update(q.params.id, payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// delete User

router.delete('/:id', async (q, r, n) => {
  Controller.delete(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

module.exports = router;

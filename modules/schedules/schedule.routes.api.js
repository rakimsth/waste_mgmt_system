const router = require('express').Router();
const Controller = require('./schedule.controller');

// create Schedule
router.post('/', async (q, r, n) => {
  const payload = q.body || {};
  Controller.add(payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list Schedule
router.get('/', async (q, r, n) => {
  Controller.list()
    .then(d => r.json(d))
    .catch(e => n(e));
});

// update schedule

router.put('/:id', async (q, r, n) => {
  const payload = q.body;

  Controller.update(q.params.id, payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// delete schedule

router.delete('/:id', async (q, r, n) => {
  Controller.delete(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

module.exports = router;

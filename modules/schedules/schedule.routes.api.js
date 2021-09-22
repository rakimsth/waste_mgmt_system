const router = require('express').Router();
const Controller = require('./schedule.controller');

// create Schedule
router.post('/', async (q, r, n) => {
  const payload = q.body || {};
  if (payload.allDay === 'true') {
    delete payload.startTime;
    delete payload.endTime;
  }
  if (payload.isRecurring === 'false') {
    delete payload.frequency;
  }
  Controller.add(payload)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list Schedule
router.get('/', async (q, r, n) => {
  const limit = q.query.limit || 20;
  const start = q.query.start || 0;
  const name = q.query.name || null;
  const province = q.query.province || null;
  const district = q.query.district || null;
  const municipality = q.query.municipality || null;
  const assignedTo = q.query.assignedTo || {};
  Controller.list({ limit, start, name, province, district, municipality, assignedTo })
    .then(d => r.json(d))
    .catch(e => n(e));
});

// list Schedule by id
router.get('/:id', async (q, r, n) => {
  Controller.getById(q.params.id)
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

// update location of existing schedule
router.patch('/:id', async (q, r, n) => {
  Controller.updateLocation(q.params.id, q.body.location)
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

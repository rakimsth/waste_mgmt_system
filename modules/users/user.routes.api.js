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

// Login User
router.post('/login', async (q, r, n) => {
  Controller.login(q.body)
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

// Change Password
router.patch('/:id/changePassword', async (q, r, n) => {
  Controller.changePassword(q.params.id, q.body)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// Reset Password
router.patch('/:id/resetPassword', async (q, r, n) => {
  Controller.resetPassword(q.params.id, q.body)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// Update User Roles
router.patch('/:id/updateRoles', async (q, r, n) => {
  Controller.updateRoles(q.params.id, q.body)
    .then(d => r.json(d))
    .catch(e => n(e));
});

// delete User
router.delete('/:id', async (q, r, n) => {
  Controller.deleteOne(q.params.id)
    .then(d => r.json(d))
    .catch(e => n(e));
});

module.exports = router;

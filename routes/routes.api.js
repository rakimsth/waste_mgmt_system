const router = require('express').Router();

const scheduleApi = require('../modules/schedules/schedule.routes.api');
const userApi = require('../modules/users/user.routes.api');

router.use('/schedules', scheduleApi);
router.use('/users', userApi);

module.exports = router;

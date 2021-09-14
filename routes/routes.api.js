const router = require('express').Router();

const scheduleApi = require('../modules/schedules/schedule.routes.api');
const userApi = require('../modules/users/user.routes.api');

router.use('/schedule', scheduleApi);
router.use('/user', userApi);

module.exports = router;

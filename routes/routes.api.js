const router = require('express').Router();

const scheduleApi = require('../modules/schedules/schedule.routes.api');

router.use('/schedule', scheduleApi);

module.exports = router;

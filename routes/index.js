const router = require('express').Router();
const apiManager = require('./routes.api');
const uiManager = require('./routes.ui');

router.use('/api/v1', apiManager);
router.use('/', uiManager);
module.exports = router;

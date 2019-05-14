const express = require('express');
const router = express.Router();
const error = require('./error');

const home = require('./home')

router.get("/", home.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
const express = require('express');
const router = express.Router();
const error = require('./error');

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.use(error.client);
router.use(error.server);

module.exports = router;
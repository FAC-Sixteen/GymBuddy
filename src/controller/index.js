const express = require('express');
const router = express.Router();
const error = require('./error');

const splash = require('./splashPage');
const conductPage = require('./conductPage');
const signup = require('./signupPage');
const matchBuddiesPage = require('./matchBuddiesPage');
const location = require('./location');

const createUser = require('./createUser');


const searchPage = require('./searchPage');

const postUser = require('./postUserImage');

const congratsPage = require('./congratsPage');



//POST
router.post('/locate', location.post); 
router.post('/create-user', createUser.post);

//GET
router.get('/', splash.get);
router.get('/conduct-page', conductPage.get);
router.get('/sign-up', signup.get);
router.get('/congrats-page', congratsPage.get);
router.get('/match-buddies-page', matchBuddiesPage.get);


router.post('/search-settings', (req, res, next) => {
    console.log('req.body', req.body);
    res.redirect('/match-buddies-page');
});

router.get('/search-page', searchPage.get); 

router.use(error.client);
router.use(error.server);

module.exports = router;

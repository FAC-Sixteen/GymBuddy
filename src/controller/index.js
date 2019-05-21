const express = require('express');
const router = express.Router();
const error = require('./error');


const splash = require('./splashPage');
const conductPage = require('./conductPage');
const signup = require("./signupPage");
const createProfilePage = require('./createProfilePage');
const location = require('./location');
const searchPage = require('./searchPage');


router.post('/locate', location.post); 
router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);


router.post('/:gender-gender/:time-time', (req, res, next) => {
    // console.log('params', req.params);
    console.log('body', req.body);
    // console.log(req)
    res.redirect('/create-profile-page/');
});

router.post('/search-settings', (req, res, next) => {
    // console.log('params', req.params);
    console.log('req', req);
    // console.log(req)
    // res.redirect('/create-profile-page/');
});

router.get('/create-profile-page', createProfilePage.get);
router.get('/search-page', searchPage.get); 

router.use(error.client);
router.use(error.server);

module.exports = router;
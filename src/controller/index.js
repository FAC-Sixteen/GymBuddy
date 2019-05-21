const express = require('express');
const router = express.Router();
const error = require('./error');


const splash = require('./splashPage');
const conductPage = require('./conductPage');
const signup = require("./signupPage");
const location = require('./location');
const postUser = require('./postUserImage');


router.post('/locate', location.post); 
router.post('/create-profile', postUser.post)
router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);



router.use(error.client);
router.use(error.server);

module.exports = router;
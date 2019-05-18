const express = require('express');
const router = express.Router();
const error = require('./error');

const splash = require('./splashPage');
const conductPage = require('./conductPage');
const signup = require("./signupPage");
const createProfilePage = require('./createProfilePage');

router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);
router.get('/create-profile-page', createProfilePage.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
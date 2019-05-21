const express = require("express");
const router = express.Router();
const error = require("./error");

const splash = require("./splashPage");
const conductPage = require("./conductPage");
const signup = require("./signupPage");

const location = require('./location');
const createUser = require('./createUser');
const congratsPage = require("./congratsPage");
const createProfilePage = require("./createProfilePage");

//POST
router.post('/locate', location.post); 
router.post('/create-user', createUser.post);

//GET
router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);
router.get("/congrats-page", congratsPage.get);
router.get("/create-profile-page", createProfilePage.get);


router.use(error.client);
router.use(error.server);

module.exports = router;

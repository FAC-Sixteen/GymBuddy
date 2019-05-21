const express = require("express");
const router = express.Router();
const error = require("./error");

const splash = require("./splashPage");
const conductPage = require("./conductPage");
const signup = require("./signupPage");
const matchBuddiesPage = require("./matchBuddiesPage");
const location = require('./location');
const postUser = require('./postUserImage');
const congratsPage = require("./congratsPage");
const createProfilePage = require("./createProfilePage");

//POST
router.post('/locate', location.post); 
router.post('/create-profile', postUser.post)

//GET
router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);
router.get("/congrats-page", congratsPage.get);
router.get("/create-profile-page", createProfilePage.get);
router.get("/match-buddies-page", matchBuddiesPage.get);


router.use(error.client);
router.use(error.server);

module.exports = router;

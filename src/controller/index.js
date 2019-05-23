const express = require("express");
const router = express.Router();
const error = require("./error");

const splash = require("./splashPage");
const conductPage = require("./conductPage");
const signup = require("./signupPage");
const matchBuddiesPage = require("./matchBuddiesPage");
// const userProfilePage = require("./userProfilePage");

const location = require("./location");

const createUser = require("./createUser");

const searchPage = require("./searchPage");

const postUserImage = require("./postUserImage");

const congratsPage = require("./congratsPage");
const reportPage = require("./reportPage");

//POST

router.post("/locate", location.post);
router.post("/create-user", createUser.post);

//GET
router.get("/", splash.get);
router.get("/conduct-page", conductPage.get);
router.get("/sign-up", signup.get);
router.get("/congrats-page", congratsPage.get);
router.get("/match-buddies-page", matchBuddiesPage.get);
router.get("/report-page", reportPage.get);

const { returnMatchedUsers } = require("../model/queries/getMatchUsers.js");
router.get("/search-settings", (req, res, next) => {
  const { agePref, distancePref, genderPref, expPref, goalPref } = req.query;
//   console.log('req.query:', req.query)
  returnMatchedUsers(parseInt(agePref), genderPref, expPref)
  .then(response => {
    res.render("matchBuddiesPage", {usersArr: response})
  })
});

router.get("/search-page", searchPage.get);

router.use(error.client);
router.use(error.server);

module.exports = router;

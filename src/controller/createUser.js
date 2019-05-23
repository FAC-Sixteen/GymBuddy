// TODO
// 1 - refactor into two separate queries
// 2 - in the queries hgave if statement for user/goal existing
const cookie = require("cookie");
const uploadImage = require("./uploadImage");
// const singleUpload = uploadImage.single("Image");
const insertData = require("../model/queries/insertData.js");
const { insertUserData, insertUserGoals, insertUserLocation } = insertData;

exports.post = (req, res) => {
  const { userName, userAge, gender, time, exp, goal, userBio } = req.body;

  const cookieParse = cookie.parse(req.headers.cookie);

  const cookieObj = JSON.parse(cookieParse.location);
  console.log(cookieParse);

  insertUserData(userName, userAge, gender, exp, userBio)
    .then(response => {
      insertUserLocation(response, cookieObj.latitude, cookieObj.longitude);

      if (!Array.isArray(goal)) {
        insertUserGoals(response, parseInt(goal));
      } else {
        goal.forEach(x => {
          insertUserGoals(response, parseInt(x));
        });
      }
    })
    .catch(error => console.log(error));

  res.redirect("/search-page");
};

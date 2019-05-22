// TODO
// 1 - refactor into two separate queries
// 2 - in the queries hgave if statement for user/goal existing

const insertData = require("../model/queries/insertData.js");
const { insertUserData, insertUserGoals, insertUserLocation } = insertData;
exports.post = (req, res) => {
  const { userName, userAge, gender, time, exp, goal, userBio } = req.body;

  console.log(req.headers);

  insertUserData(userName, userAge, gender, exp, userBio)
    .then(response => {
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

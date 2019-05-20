const db = require("../db_connections");

const getData = () => {
  return db
    .query("SELECT * FROM users")
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnMatchedUsers = (age, gender, location, experience) => {
  return db
    .query(
      "SELECT * FROM users WHERE (age, gender, location, experience) = ($1, $2, $3, $4)",
      [age, gender, location, experience]
    )
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnUserAndAllGoals = userID => {
  return db
    .query("SELECT * FROM users_goals WHERE (users_id) = ($1)", [userID])
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const returnUserAndAllTimes = userID => {
  return db
    .query("SELECT * FROM users_time WHERE (users_id) = ($1)", [userID])
    .then(response => {
      return response.rows;
    })
    .catch(err => console.log(err));
};

const completeUserData = (
  age,
  gender,
  location,
  experience,
  userID,
  timeID
) => {
  let resultArr = [];

  let matchedUser = returnMatchedUsers(age, gender, location, experience);
  matchedUser.then(result =>
    setTimeout(() => {
      result;
    }, 5000)
  );
  resultArr.push(matchedUser);

  let userGoal = returnUserAndAllGoals(userID);
  userGoal.then(result => result);
  resultArr.push(userGoal);

  let userTime = returnUserAndAllTimes(timeID);
  userTime.then(result => result);
  resultArr.push(userTime);

  Promise.all(resultArr).then(value => {
    mapGoalsData(value);
  });
};

completeUserData(28, "Male", "London", "Beginner", 2, 2);

const sortObj = (obj = `{ users_id: 2, ${part}: '' }`, part) => {
  const partId = obj[part];
  return partId;
};

const mapGoalsData = value => {
  let objOne = { ...value[0][0] };
  let goalsObjOne = { ...value[1][0] };
  let goalsObjTwo = { ...value[1][1] };
  let goalsObjThree = { ...value[1][2] };
  let goalsObjFour = { ...value[1][3] };

  const firstGoal = sortObj(goalsObjOne, "goals_id");
  const secondGoal = sortObj(goalsObjTwo, "goals_id");
  const thirdGoal = sortObj(goalsObjThree, "goals_id");
  const fourthGoal = sortObj(goalsObjFour, "goals_id");

  objOne.goals_id = [firstGoal, secondGoal, thirdGoal, fourthGoal];

  const objTotalNumGoals = value[1].length;
  for (i = 0; i < objTotalNumGoals; i++) {
    objOne.goals_id.pop();
  }
  console.log(objOne);
};

module.exports = {
  getData,
  returnMatchedUsers,
  returnUserAndAllGoals,
  returnUserAndAllTimes
};

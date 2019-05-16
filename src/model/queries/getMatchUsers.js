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
  console.log(resultArr);
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

  // let promisesArray = [matchedUser, userGoal, userTime];

  Promise.all(resultArr).then(value => {
    mapData(value);
    // console.log(value);
  });
};

completeUserData(28, "Male", "London", "Beginner", 2, 2);

const mapData = value => {
  let objOne = { ...value[0][0] };
  let objTwo = { ...value[1] };
  let objThree = { ...value[1][1] };
  const { goals_id } = objTwo;

  // console.log(value);
  objOne.goals_id = [goals_id];

  // const { goals_id } = objThree;
  // objOne.goals_id[1] = [goals_id];

  // console.log(objOne);
  // console.log(objTwo);
  // console.log(objThree);
};

module.exports = {
  getData,
  returnMatchedUsers,
  returnUserAndAllGoals,
  returnUserAndAllTimes
};

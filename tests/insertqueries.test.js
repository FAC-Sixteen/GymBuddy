const runDbBuild = require("../src/model/db_build");
const postData = require("../src/model/queries/insertData");
const getData = require("../src/model/queries/getData");

const firstUser = {
  age: 21,
  experience: "experience",
  gender: "gender",
  location: "location",
  photo: "photo",
  users_id: 5,
  users_name: "users_name"
};

const secondUser = {
  age: 22,
  experience: "beginner",
  gender: "woman",
  location: "london",
  photo: "photo",
  users_id: 6,
  users_name: "jo"
};

beforeAll(() => {
  console.log("running: beforeAll");
  runDbBuild();
});

// beforeEach(() => {
//   console.log("running: before");
//   runDbBuild();
// });

const sum = (a, b) => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

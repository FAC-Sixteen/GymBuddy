require("env2")("./config.env");
const runDbBuild = require("../src/model/db_build");
const postData = require("../src/model/queries/insertData");
// const getData = require("../src/model/queries/getData");

// beforeAll(() => {
//   console.log("running: beforeAll");
//   runDbBuild();
// });

const sum = (a, b) => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

// test("testing the post data function adds a user to the users table", async () => {
//   await expect(
//     postData.insertUserData("banna", 21, "woman", "beginner", "hello hi")
//   ).resolves.toBe(5);
// });

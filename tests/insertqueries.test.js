require("env2")("./config.env");
const runDbBuild = require("../src/model/db_build");
const dbConnect = require("../src/model/db_connections");
const postData = require("../src/model/queries/insertData");
const getData = require("../src/model/queries/getData");

beforeEach(async () => {
  console.log("running: db build");
  await runDbBuild();
});

afterAll(async done => {
  await dbConnect.end();
  done();
});

const sum = (a, b) => {
  return a + b;
};

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("testing the post data function adds a user to the users table", () => {
  return postData
    .insertUserData("banna", 21, "woman", "beginner", "hello hi")
    .then(response => {
      expect(response).toBe(5);
    });
});

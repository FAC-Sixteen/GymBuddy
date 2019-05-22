const request = require("supertest");
const app = require("../src/app");

describe("test the home route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the conduct page route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/conduct-page")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the sign-up page route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/sign-up")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the congrats page route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/congrats-page")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the match up page route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/match-buddies-page")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the report page route path", () => {
  test("it should respond with status code 200", done => {
    request(app)
      .get("/report-page")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("test the home route path", () => {
  test("it should respond with content type HTML", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.type).toBe("text/html");
        done();
      });
  });
});

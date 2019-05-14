const request = require('supertest');
const app = require('../src/app');

describe('test the home route path', () => {
    test('it should respond with status code 200', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});


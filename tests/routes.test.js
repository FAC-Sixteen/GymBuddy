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

describe('test the home route path', () => {
    test('it should respond with content type HTML', (done) => {
        request(app).get('/').then((response) => {
            expect(response.type).toBe('text/html');
            done();
        });
    });
});


describe('test the user location path', () => {
    test('it should respond with status code 200', (done) => {
        request(app).post('/locate').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

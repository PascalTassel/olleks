// Using SuperTest for local HTTP request management.
const request = require('supertest');
const app = require('../../..');

describe('Website documentation home page route test', () => {
  test('response to /', async () => {
    const res = await request(app).get('/');
    expect(res.header['content-type']).toBe('text/html; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });
});

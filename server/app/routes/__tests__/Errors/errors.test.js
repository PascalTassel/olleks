// Using SuperTest for local HTTP request management.
const request = require('supertest');
const app = require('../../..');
const { WebsiteError } = require('../../../helpers/errorHandler');

describe('Errors Validations', () => {
  describe('404 - Error Validation', () => {
    test('404 status to be 404', async () => {
      await request(app).get('/icantfoundthispage')
        .then((e) => {
          expect(e.status).toBe(404);
        });
    });
  });

  describe('500 error', () => {
    test('Website Error Instance of Error', () => {
      expect(new WebsiteError(500, 'test')).toBeInstanceOf(Error);
    });
  });
});

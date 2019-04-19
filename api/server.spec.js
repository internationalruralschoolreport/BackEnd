const request = require('supertest');
const server = require('./server'); 

const auth = require('../auth/authenticate');
const db = require('../database/dbConfig');

describe('server.js', () => {
    describe('GET /', () => {
      it('should respond with 200 OK', () => {
        return request(server)
          .get('/')
          .then(response => {
            expect(response.status).toBe(200);
          });
      });
  
      it('should work', () => {
        return request(server)
          .get('/')
          .expect(200);
      });
  
      it('should return json', () => {
        return request(server)
          .get('/')
          .then(res => {
            expect(res.type).toBe('application/json');
          });
      });
  
    it('should check for json', () => {
      return request(server)
        .get('/')
        .expect('Content-Type', /json/);
    });
  
    it('should return "IR School Report Backend', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.body).toBe('IR School Report Backend');
        })
    })
  })




})
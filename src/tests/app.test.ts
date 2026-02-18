import request from 'supertest';
import app from '../app';

describe('App Tests', () => {
  it('should respond with a 200 status code on the root route', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  it('should return JSON data from the API', async () => {
    const response = await request(app).get('/api/data'); // Adjust the route as necessary
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.any(Object)); // Adjust based on expected response structure
  });

  // Add more tests as needed
});
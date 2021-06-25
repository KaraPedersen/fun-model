import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Car from '../lib/models/Car.js';

// CRUD
// C - create POST      INSERT
// R - read   GET       SELECT
// U - update PUT       UPDATE
// D - delete DELETE    DELETE

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a car via POST', async () => {
    const res = await request(app)
      .post('/api/v1/cars')
      .send({
        make: 'nissan',
        model: 'armada',
        year: 2012
      });

    expect(res.body).toEqual({
      id: '1',
      make: 'nissan',
      model: 'armada',
      year: 2012
    });
  });
});

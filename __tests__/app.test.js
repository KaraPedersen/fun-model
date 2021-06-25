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

  test('finds all cars via GET', async () => {
    const nissan = await Car.insert({
      make: 'nissan',
      model: 'armada',
      year: 2012
    });

    const ford = await Car.insert({
      make: 'ford',
      model: 'mustang gt',
      year: 2014
    });

    const hyundai = await Car.insert({
      make: 'hyundai',
      model: 'tucson',
      year: 2011
    });

    const res = await request(app)
      .get('/api/v1/cars');

    expect(res.body).toEqual([nissan, ford, hyundai]);

  });

  test('find a car via GET', async () => {
    const car = await Car.insert({
      make: 'hyundai',
      model: 'elentra',
      year: 2020
    });

    const res = await request(app)
      .get(`api/v1/cars/${car.id}`);

    expect(res.body).toEqual(car);
  });
});

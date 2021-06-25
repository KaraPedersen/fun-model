import { Router } from 'express';
import Car from '../models/Car';

export default Router() 
  .post('/api/v1/cars', async (req, res) => {
    try {
      const car = await Car.insert(req.body);
      res.send(car);
    } catch (err) {
      res.status(500).send({ error:err.message });
    }
  })

  .get('/api/v1/cars', async (req, res) => {
    try {
      const cars = await Car.findAll();
      res.send(cars);

    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/cars/:id', async (req, res) => {
    try {
      const car = await Car.findById(req.params.id);
      res.send(car);

    } catch (err) {
      res.status(500).send({ error:err.message });
    }
  });

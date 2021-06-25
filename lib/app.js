import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import carController from './controllers/cars.js';

const app = express();

app.use(express.json());

app.use(carController);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;

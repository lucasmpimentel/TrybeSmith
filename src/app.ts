import express from 'express';
import error from './middlewares/errors';
import routes from './routes';

require('express-async-errors');

const app = express();

app.use(express.json());
app.use(routes);
app.use(error);

export default app;

import express from 'express';
import 'express-async-errors';
import routes from './routes';
import error from './middlewares/errors';

const app = express();

app.use(express.json());
app.use(routes);

app.use(error);

export default app;

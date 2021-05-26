import { Application, ErrorRequestHandler } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleError: ErrorRequestHandler = (err, _, res, __): void => {
  // TODO: replace with logger service
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
};

export const getErrorConfig = (app: Application): void => {
  app.use(handleError);
};

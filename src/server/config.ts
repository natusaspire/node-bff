import express, { Application } from 'express';

export const getAppConfig = (app: Application): void => {
  app.use(express.json());
};

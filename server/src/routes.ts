import express, { request, response } from 'express'
import knex from './database/connection'

const routes = express.Router();

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)

export default routes;
import { Router } from 'express';
import AdminsController from '../controllers/AdminsController';

const adminsRouter = Router();
const adminsController = new AdminsController();

adminsRouter.post('/', adminsController.create);

export default adminsRouter;

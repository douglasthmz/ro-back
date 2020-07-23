import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import ReportsController from '../controllers/ReportsController';

const reportsRouter = Router();
const reportsController = new ReportsController();

reportsRouter.patch('/:id', reportsController.update);

reportsRouter.post('/test', reportsController.test);

reportsRouter.use(ensureAuthenticated);

export default reportsRouter;

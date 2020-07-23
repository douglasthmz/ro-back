import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import ExibitionsController from '../controllers/ExibitionsController';

const exibitionsRouter = Router();
const exibitionsController = new ExibitionsController();

exibitionsRouter.get('/:id', exibitionsController.index);
exibitionsRouter.get('/last15/:id', exibitionsController.listLast15);
exibitionsRouter.patch('/:id', exibitionsController.update);

exibitionsRouter.post('/test', exibitionsController.test);

exibitionsRouter.use(ensureAuthenticated);

export default exibitionsRouter;

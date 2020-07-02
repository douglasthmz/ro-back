import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import FailureOriginController from '../controllers/FailureOriginController';

const failureOriginRouter = Router();
const failureOriginController = new FailureOriginController();

failureOriginRouter.get('/', failureOriginController.show);
failureOriginRouter.post('/', failureOriginController.create);
failureOriginRouter.delete('/:id', failureOriginController.remove);

failureOriginRouter.use(ensureAuthenticated);

export default failureOriginRouter;

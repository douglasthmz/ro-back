import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import RolesController from '../controllers/RolesController';

const rolesRouter = Router();
const rolesController = new RolesController();

rolesRouter.use(ensureAuthenticated);

rolesRouter.post('/', rolesController.create);

export default rolesRouter;

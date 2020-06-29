import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import RolesController from '../controllers/RolesController';

const rolesRouter = Router();
const rolesController = new RolesController();

rolesRouter.get('/', rolesController.show);
rolesRouter.post('/', rolesController.create);
rolesRouter.use(ensureAuthenticated);

export default rolesRouter;

import { Router } from 'express';

import adminsRouter from '@modules/admin/infra/http/routes/admins.routes';
import rolesRouter from '@modules/roles/infra/http/routes/roles.routes';
import sessionsRouter from '@modules/admin/infra/http/routes/sessions.routes';
import failureOriginRouter from '@modules/failureOrigin/infra/http/routes/failureOrigin.routes';

const routes = Router();

routes.use('/admins', adminsRouter);
routes.use('/roles', rolesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/failures', failureOriginRouter);

export default routes;

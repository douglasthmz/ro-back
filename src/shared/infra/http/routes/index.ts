import { Router } from 'express';

import adminsRouter from '@modules/admin/infra/http/routes/admins.routes';
import rolesRouter from '@modules/roles/infra/http/routes/roles.routes';
import sessionsRouter from '@modules/admin/infra/http/routes/sessions.routes';
import failureOriginRouter from '@modules/failureOrigin/infra/http/routes/failureOrigin.routes';
import productsRouter from '@modules/product/infra/http/routes/products.routes';
import membersRouter from '@modules/member/infra/http/routes/members.routes';

const routes = Router();

routes.use('/admins', adminsRouter);
routes.use('/roles', rolesRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/failures', failureOriginRouter);
routes.use('/products', productsRouter);
routes.use('/members', membersRouter)

export default routes;

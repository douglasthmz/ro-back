import { Router } from 'express';
import ensureAuthenticated from '@modules/admin/infra/http/middlewares/ensureAuthenticated';
import ProductsController from '../controllers/ProductsController';

const productsRouter = Router();
const productsController = new ProductsController();

productsRouter.get('/', productsController.show);
productsRouter.post('/', productsController.create);
productsRouter.delete('/:id', productsController.remove);

productsRouter.use(ensureAuthenticated);

export default productsRouter;

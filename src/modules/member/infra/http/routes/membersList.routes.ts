import { Router } from 'express';
import MembersListController from '../controllers/MembersListController';

const membersListRouter = Router();
const membersListController = new MembersListController();

membersListRouter.post('/', membersListController.createList);
export default membersListRouter;

import { Router } from 'express';
import ValidateReceivedJSON from '@shared/infra/http/middlewares/ValidateReceivedJSON';
import MembersListController from '../controllers/MembersListController';
import MembersListSchema from '../schemas/MembersListSchema';

const membersListRouter = Router();
const membersListController = new MembersListController();

membersListRouter.post(
  '/',
  ValidateReceivedJSON(MembersListSchema),
  membersListController.createList,
);
export default membersListRouter;

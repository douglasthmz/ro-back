import { Router } from 'express';
import ValidateMembersListJSON from '../middlewares/validateMemberListJSON';
import MembersListController from '../controllers/MembersListController';
import MembersListSchema from '../../../schemas/MembersListSchema';

const membersListRouter = Router();
const membersListController = new MembersListController();

membersListRouter.post(
  '/',
  ValidateMembersListJSON(MembersListSchema),
  membersListController.createList,
);
export default membersListRouter;

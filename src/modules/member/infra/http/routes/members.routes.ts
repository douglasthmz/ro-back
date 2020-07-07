import { Router, response } from 'express';
import MembersController from '../controllers/MembersController';

const membersRouter = Router();
const membersController = new MembersController();

membersRouter.post('/', membersController.createMember);
membersRouter.delete('/:id', membersController.removeMember)
membersRouter.get('/', membersController.showMember)

export default membersRouter;

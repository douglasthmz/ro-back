import { Router } from 'express';

import { getRepository } from 'typeorm';
import RoleService from '../services/RoleService';
import Role from '../models/Role';

const rolesRouter = Router();

rolesRouter.post('/', async (req, res) => {
  const { role_name } = req.body;
  const roleService = new RoleService();

  const role = await roleService.create({
    role_name,
  });
  return res.json(role);
});

rolesRouter.get('/', async (req, res) => {
  const rolesRepository = getRepository(Role);
  const roles = await rolesRepository.find();
  return res.json(roles);
});

rolesRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const roleService = new RoleService();

  const roleDeleted = await roleService.remove(id);

  return res.json({ message: roleDeleted });
});

export default rolesRouter;

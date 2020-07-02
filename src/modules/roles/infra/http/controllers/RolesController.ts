import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRoleService from '@modules/roles/services/CreateRoleService';
import ShowRolesService from '@modules/roles/services/ShowRolesService';
import RemoveRoleService from '@modules/roles/services/RemoveRoleService';

export default class RolesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { role } = request.body;

    const createRole = container.resolve(CreateRoleService);

    const roleInstance = await createRole.execute({
      role,
    });

    return response.json(roleInstance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const getRoles = container.resolve(ShowRolesService);

    const roles = await getRoles.execute();

    return response.json(roles);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const removeRole = container.resolve(RemoveRoleService);

      await removeRole.execute(id);

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

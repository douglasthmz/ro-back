import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateRoleService from '@modules/roles/services/CreateRoleService';

export default class RolesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { role } = request.body;

    const createRole = container.resolve(CreateRoleService);

    const roleInstance = await createRole.execute({
      role,
    });

    return response.json(roleInstance);
  }
}

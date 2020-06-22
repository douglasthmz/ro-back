import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAdminService from '@modules/admin/services/CreateAdminService';

export default class AdminsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, role_id } = request.body;

      const createAdmin = container.resolve(CreateAdminService);

      const admin = await createAdmin.execute({
        name,
        email,
        password,
        role_id,
      });

      delete admin.password;

      return response.json(admin);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

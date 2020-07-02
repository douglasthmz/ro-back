import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateFailureOriginService from '@modules/failureOrigin/service/CreateFailureOriginService';
import ShowFailureOriginService from '@modules/failureOrigin/service/ShowFailureOriginService';
import RemoveFailureOriginService from '@modules/failureOrigin/service/RemoveFailureOriginService';

export default class FailureOriginController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { type, origin } = request.body;

    const createFailureOrigin = container.resolve(CreateFailureOriginService);

    const failureOriginInstance = await createFailureOrigin.execute({
      type,
      origin,
    });

    return response.json(failureOriginInstance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const getFailureOrigin = container.resolve(ShowFailureOriginService);

    const failures = await getFailureOrigin.execute();

    return response.json(failures);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const removeFailure = container.resolve(RemoveFailureOriginService);

      await removeFailure.execute(id);

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

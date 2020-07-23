import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListLast15ExibitionsService from '@modules/exibition/service/ListLast15ExibitionsService';
import ListAllExibitionsService from '@modules/exibition/service/ListAllExibitionsService';
import UpdateExibitionService from '@modules/exibition/service/UpdateExibitionService';
import CreateExibitionService from '@modules/exibition/service/CreateExibitionService';

export default class ProductsController {
  public async listLast15(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const getExibitions = container.resolve(ListLast15ExibitionsService);

    const exibitions = await getExibitions.execute(id);

    return response.json(exibitions);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const getExibitions = container.resolve(ListAllExibitionsService);

    const exibitions = await getExibitions.execute(id);

    return response.json(exibitions);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { admin_id, ready_time } = request.body;
    const { id } = request.params;

    const updateExibition = container.resolve(UpdateExibitionService);

    const exibition = await updateExibition.execute({
      id,
      admin_id,
      ready_time,
    });

    return response.json(exibition);
  }

  public async test(request: Request, response: Response): Promise<Response> {
    const { product_id, exibition_date } = request.body;

    const createExibition = container.resolve(CreateExibitionService);

    const exibition = await createExibition.execute({
      product_id,
      exibition_date,
    });

    return response.json(exibition);
  }
}

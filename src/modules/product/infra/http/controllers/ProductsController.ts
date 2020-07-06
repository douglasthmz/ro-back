import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProductService from '@modules/product/service/CreateProductService';
import ShowProductsService from '@modules/product/service/ShowProductsService';
import RemoveProductService from '@modules/product/service/RemoveProductService';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      site,
      studio,
      alias,
      control,
      avatar_link,
      exibition_days,
      initial_time,
      end_time,
    } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const productInstance = await createProduct.execute({
      name,
      site,
      studio,
      alias,
      control,
      avatar_link,
      exibition_days,
      initial_time,
      end_time,
    });

    return response.json(productInstance);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const getProducts = container.resolve(ShowProductsService);

    const products = await getProducts.execute();

    return response.json(products);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const removeProduct = container.resolve(RemoveProductService);

      await removeProduct.execute(id);

      return response.status(204).json();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

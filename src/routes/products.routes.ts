import { Router } from 'express';
import { getRepository } from 'typeorm';
import multer from 'multer';
import Product from '../models/Product';
import ProductService from '../services/ProductService';
import UploadConfig from '../config/Upload';

const productsRouter = Router();

const upload = multer(UploadConfig);

productsRouter.get('/', async (req, res) => {
  const productsRepository = getRepository(Product);
  const products = await productsRepository.find();

  res.json(products);
});

productsRouter.post('/', async (req, res) => {
  const { name, alias, host, studio, initial_time, end_time } = req.body;
  const productService = new ProductService();
  const product = await productService.create({
    name,
    alias,
    host,
    studio,
    initial_time,
    end_time,
  });

  res.json(product);
});

productsRouter.patch('/:id', async (req, res) => {
  const { name, alias, host, studio, initial_time, end_time } = req.body;
  const { id } = req.params;
  const productService = new ProductService();

  const message = await productService.update({
    id,
    name,
    alias,
    host,
    studio,
    initial_time,
    end_time,
  });

  res.json({ message });
});

productsRouter.patch('/avatar/:id', upload.single('File'), async (req, res) => {
  const { filename } = req.file;
  const { id } = req.params;

  const productService = new ProductService();

  const message = await productService.updateAvatar(id, filename);
  res.json({ message });
});

productsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const productService = new ProductService();

  const message = await productService.delete(id);

  res.json({ message });
});

export default productsRouter;

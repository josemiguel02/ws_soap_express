import { Router } from 'express';
import { getProductsCtrl } from './controller';

const productsRouter = Router();

productsRouter.get('/', getProductsCtrl);

export default productsRouter;

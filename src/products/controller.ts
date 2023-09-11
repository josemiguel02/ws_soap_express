import { Request, Response } from 'express';

export const getProductsCtrl = (req: Request, res: Response) => {
  res.json({
    products: [{ id: 1, name: 'Asus Tuf Gamer F15' }],
  });
};

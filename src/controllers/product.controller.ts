import { Request, Response } from 'express'
import { AuthRequest } from '../middleware/auth.middleware'
import prisma from "../lib/prisma";

const productController = {
  async getAll(req: AuthRequest, res: Response) {
    const products =  await prisma.product.findMany();
    res.json(products)
  },

  async getById(req: Request, res: Response) {
    res.json({ id: req.params.id })
  },

  async create(req: AuthRequest, res: Response) {
    const { name, description, price } = req.body;
    const query= await prisma.product.create({
      data: {
        name,
        description,
        price,
      },
    });
    if (query) {
      res.status(201).json({ message: 'Product created' })
    } else {
      res.status(400).json({ message: 'Failed to create product' })
    }
  },

  async update(req: Request, res: Response) {
    res.json({ message: 'Product updated' })
  },

  async remove(req: Request, res: Response) {
    res.json({ message: 'Product deleted' })
  }
}

export default productController

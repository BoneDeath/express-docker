import { Request, Response } from 'express'
import { AuthRequest } from '../middleware/auth.middleware'

const productController = {
  async getAll(req: AuthRequest, res: Response) {
    console.log(req.user)

    res.json({ message: 'Get all products' })
  },

  async getById(req: Request, res: Response) {
    res.json({ id: req.params.id })
  },

  async create(req: Request, res: Response) {
    res.status(201).json({ message: 'Product created' })
  },

  async update(req: Request, res: Response) {
    res.json({ message: 'Product updated' })
  },

  async remove(req: Request, res: Response) {
    res.json({ message: 'Product deleted' })
  }
}

export default productController

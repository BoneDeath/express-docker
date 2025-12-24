import { Request, Response } from 'express'

const productController = {
  async getAll(req: Request, res: Response) {
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

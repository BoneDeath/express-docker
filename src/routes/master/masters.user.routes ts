import { Express } from "express";
import { Router } from 'express'
import productController from '../../controllers/product.controller'
import authMiddleware from '../../middleware/auth.middleware'
// import roleMiddleware from '../../middlewares/role.middleware'

const router = Router()

/**
 * =========================
 * MASTER DATA - PRODUCT
 * =========================
 */

/**
 * GET /api/master/products
 * Get all products
 */
router.get(
  '/',
  authMiddleware,
  productController.getAll
)

/**
 * GET /api/master/products/:id
 * Get product by ID
 */
router.get(
  '/:id',
  authMiddleware,
  productController.getById
)

/**
 * POST /api/master/products
 * Create new product
 */
router.post(
  '/',
  authMiddleware,
  // roleMiddleware('admin'),
  productController.create
)

/**
 * PUT /api/master/products/:id
 * Update product
 */
router.put(
  '/:id',
  authMiddleware,
  // roleMiddleware('admin'),
  productController.update
)

/**
 * DELETE /api/master/products/:id
 * Delete product (soft delete recommended)
 */
router.delete(
  '/:id',
  authMiddleware,
  // roleMiddleware('admin'),
  productController.remove
)

export default router

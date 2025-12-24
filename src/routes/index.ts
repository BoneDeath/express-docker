import { Router } from 'express'

// ===== AUTH ROUTES =====
import authRoutes from './auth.routes'

// ===== MASTER DATA ROUTES =====
import productRoutes from './master/masters.product.routes'

const router = Router()

/**
 * =========================
 * AUTH
 * =========================
 */
router.use('/auth', authRoutes)

/**
 * =========================
 * MASTER DATA
 * =========================
 */
router.use('/master/products', productRoutes)

export default router

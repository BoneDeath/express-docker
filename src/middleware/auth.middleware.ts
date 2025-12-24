import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

export interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
    role: string
  }
}

const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token tidak ditemukan' })
  }

  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Format token salah' })
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token tidak valid' })
  }
}

export default authMiddleware

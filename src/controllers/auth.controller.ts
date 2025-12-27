import { Request, Response } from 'express'
import { comparePassword } from '../utils/bcrypt'
import { signToken } from '../utils/jwt'
import prisma from '../lib/prisma'

const authController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return res.status(401).json({ message: 'Email atau password salah' })
    }

    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Email atau password salah' })
    }

    const token = signToken({
      id: user.id,
      email: user.email,
      role: user.role
    })

    res.json({
      message: 'Login berhasil',
      token
    })
  }
}

export default authController

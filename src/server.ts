import app from './app'
import prisma from './lib/prisma'

const PORT = parseInt(process.env.APP_PORT || '3000', 10)

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

// graceful shutdown
const shutdown = async (signal: string) => {
  console.log(`🛑 Received ${signal}, shutting down...`)

  server.close(async () => {
    console.log('✅ HTTP server closed')

    // kalau pakai Prisma (opsional)
    await prisma.$disconnect()

    process.exit(0)
  })
}

process.on('SIGTERM', shutdown)
process.on('SIGINT', shutdown)

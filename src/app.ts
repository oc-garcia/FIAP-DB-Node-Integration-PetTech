import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { UserRoutes } from '@/http/controllers/user/route'
import { ZodError } from 'zod'
import { env } from './env'

export const app = fastify()

app.register(personRoutes)
app.register(UserRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', errors: error.format() })
  }

  if (env.NODE_ENV === 'development') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal server error' })
})

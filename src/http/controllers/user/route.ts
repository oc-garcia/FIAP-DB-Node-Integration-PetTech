import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findUser } from './find-user'

export async function UserRoutes(app: FastifyInstance) {
  app.get('/user/:id', findUser)
  app.post('/user', create)
}

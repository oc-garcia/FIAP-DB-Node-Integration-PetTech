import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { UserRoutes } from './http/controllers/user/route'

export const app = fastify()

app.register(personRoutes)
app.register(UserRoutes)

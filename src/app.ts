import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { UserRoutes } from '@/http/controllers/user/route'
import { globalErrorHandler } from './utils/global-error-handler'

export const app = fastify()

app.register(personRoutes)
app.register(UserRoutes)

app.setErrorHandler(globalErrorHandler)

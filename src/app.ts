import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from '@/http/controllers/user/route'
import { globalErrorHandler } from './utils/global-error-handler'
import { addressRoutes } from './http/controllers/address/routes'
import { productRoutes } from './http/controllers/product/routes'

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.register(productRoutes)

app.setErrorHandler(globalErrorHandler)

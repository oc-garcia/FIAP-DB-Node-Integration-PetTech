import { env } from '@/env'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

interface ErrorHandlerMap {
  [key: string]: (
    error: Error | ZodError,
    request: FastifyRequest,
    reply: FastifyReply,
  ) => void
}

export const errorHandlerMap: ErrorHandlerMap = {
  ZodError: (error, _, reply) => {
    return reply.status(400).send({
      message: 'Validation error',
      ...(error instanceof ZodError && { errors: error.format() }),
    })
  },

  ResourceNotFoundError: (error, _, reply) => {
    reply.status(404).send({ message: error.message })
  },

  InvalidCredentialsError: (error, _, reply) => {
    reply.status(401).send({ error: error.message })
  },

  default: (error, _, reply) => {
    if (env.NODE_ENV === 'development') {
      console.error(error)
    }

    reply.status(500).send({ message: 'Internal server error' })
  },
}

export const globalErrorHandler = (
  error: Error,
  _: FastifyRequest,
  reply: FastifyReply,
) => {
  if (env.NODE_ENV === 'development') {
    console.error(error)
  }

  const handler = errorHandlerMap[error.constructor.name]

  if (handler) {
    return handler(error, _, reply)
  }

  return reply.status(500).send({ message: 'Internal server error' })
}

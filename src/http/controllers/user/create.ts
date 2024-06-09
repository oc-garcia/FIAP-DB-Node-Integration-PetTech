import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(request.body)

  try {
    const createUserUseCase = makeCreateUserUseCase()

    const user = await createUserUseCase.handler({ username, password })

    return reply.code(201).send(user)
  } catch (error) {
    console.error(`Error creating user: ${error}`)
    throw new Error(`Error creating user: ${error}`)
  }
}

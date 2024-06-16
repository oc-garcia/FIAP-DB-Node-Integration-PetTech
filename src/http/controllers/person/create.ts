import { makeCreatePersonUseCase } from '@/use-cases/factory/make-create-person-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    email: z.string().email(),
    birth: z.coerce.date(),
    user_id: z.coerce.number(),
  })

  const { cpf, name, email, birth, user_id } = registerBodySchema.parse(
    request.body,
  )
  const createPersonUseCase = makeCreatePersonUseCase()
  const person = await createPersonUseCase.handler({
    cpf,
    name,
    email,
    birth,
    user_id,
  })

  return reply.code(201).send(person)
}

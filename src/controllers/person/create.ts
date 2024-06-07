import { PersonRepository } from '@/repository/person.repository'
import { CreatePersonUseCase } from '@/use-cases/create-person'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string().length(14),
    name: z.string(),
    email: z.string().email(),
    birth: z.string(),
  })

  const { cpf, name, email, birth } = registerBodySchema.parse(request.body)

  try {
    const personRepository = new PersonRepository()
    const createPersonUseCase = new CreatePersonUseCase(personRepository)

    await createPersonUseCase.handler({ cpf, name, email, birth })

    return reply.code(201).send()
  } catch (error) {
    return reply.code(500).send()
  }
}

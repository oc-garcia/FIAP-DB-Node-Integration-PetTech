import { PersonRepository } from '@/repository/person.repository'
import { CreatePersonUseCase } from '@/use-cases/create-person'
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

  try {
    const personRepository = new PersonRepository()
    const createPersonUseCase = new CreatePersonUseCase(personRepository)

    const person = await createPersonUseCase.handler({
      cpf,
      name,
      email,
      birth,
      user_id,
    })

    return reply.code(201).send(person)
  } catch (error) {
    console.error(`Error creating user: ${error}`)
    throw new Error(`Error creating user: ${error}`)
  }
}

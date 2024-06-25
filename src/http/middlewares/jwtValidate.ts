import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const route = request.routerPath
    const method = request.method

    if (route === '/user' && method === 'POST') return

    await request.jwtVerify()
  } catch (error) {
    reply.code(401).send({ message: 'Unauthorized' })
  }
}

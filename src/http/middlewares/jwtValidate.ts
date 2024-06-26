import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const routeWhiteList = ['POST-/user', 'POST-/user/signin']
    const validateRoute = `${request.method}-${request.routerPath}`

    if (routeWhiteList.includes(validateRoute)) return

    await request.jwtVerify()
  } catch (error) {
    reply.code(401).send({ message: 'Unauthorized' })
  }
}

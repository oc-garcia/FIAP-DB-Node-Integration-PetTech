import { app } from '@/app'
import { env } from '@/env'

const HOST = env.DATABASE_HOST || '0.0.0.0'
const PORT = env.PORT || 3000

app
  .listen({ host: HOST, port: PORT })
  .then(() => console.log(`Server is running on http://${HOST}:${PORT}`))

  //postgresql://root:kuvNGuhifmM9tBQtNQzyoG2oIz1L9Q9T@dpg-cptn7nl2ng1s73e3nph0-a/pettech
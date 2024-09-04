import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
const payload = async () =>
  await getPayloadHMR({
    config: configPromise,
  })
export const GET = async () => {
  const data = await payload.find({
    collection: 'users',
  })

  return Response.json(data)
}

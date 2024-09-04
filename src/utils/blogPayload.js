import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const getPosts = async () => {
  const payload = await getPayloadHMR({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'posts',
  })
  console.log('gettting posts:', data)
  return data.docs
}

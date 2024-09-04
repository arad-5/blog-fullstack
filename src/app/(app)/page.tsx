import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const data = await payload.find({
    collection: 'pages',
  })
  console.log(data)

  return (
    <main className="p-24">
      <div>
        <Link href={'/blog/posts'}>مقالات</Link>
      </div>
      <Background />
    </main>
  )
}

export default Page

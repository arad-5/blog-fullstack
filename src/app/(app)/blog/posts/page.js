import { getPosts } from '@/utils/blogPayload'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
  const posts = await getPosts()

  return (
    <div>
      {posts.map((post) => (
        <Link href={'/blog/posts/' + post.slug} key={post.id}>
          {post.title}
        </Link>
      ))}
    </div>
  )
}

export default Page

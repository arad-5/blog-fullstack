import { getPosts } from '@/utils/blogPayload'

const Page = async ({ params }) => {
  const { slug } = params

  // Fetch post data using the id

  return <div>{slug}</div>
}

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map(({ slug, id }) => ({
    slug: slug + '-' + id,
  }))
}
export default Page

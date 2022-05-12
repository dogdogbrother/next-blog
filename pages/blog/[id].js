export default function Blog({ blogInfo = {} }) {
  console.log(blogInfo);
  return <div>
    {JSON.stringify(blogInfo)}
  </div>
}
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/blog/id`)
  const blogs = await res.json()
  const paths = blogs.map(blog => ({params: { id: String(blog.id)}}))
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const res = await fetch(`http://localhost:3000/blog/info/${id}`)
  const blogInfo = await res.json()
  return {
    props: {
      blogInfo
    }
  }
}


import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { config } from "../blog.config"
import { PostPreview } from "../components/PostPreview"

const Index = ( {posts} ) => {
  return (
    <>
      {posts.map((post, index) => (
        <PostPreview post={post} key={index}/>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const postsDir = path.join(process.cwd(), config.mdxSources)
  const mdxFiles = fs.readdirSync(path.join(postsDir))
  console.log(`MDX Files: ${mdxFiles}`)
  const posts = mdxFiles.map(filename => {
    const markdownSource = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
    const { data: frontMatter } = matter(markdownSource)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}

export default Index

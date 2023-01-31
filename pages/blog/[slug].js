import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { config } from "../../blog.config"
import { remarkCodeHike } from "@code-hike/mdx"
import theme from "shiki/themes/dracula.json"
import { CH } from "@code-hike/mdx/components"

const PostPage = ({ frontMatter: { title, date, description }, slug, mdxSource }) => {
  console.log(`[PostPage] - ${slug}\n${title}\n${date}\n${description}`)
  return (
    <div className="mt-4">
      <MDXRemote {...mdxSource} components={ {CH} } />
    </div>
  )
}

const getStaticPaths = async () => {
  const postsDir = path.join(process.cwd(), config.mdxSources)
  const files = fs.readdirSync(postsDir)
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const postsDir = path.join(process.cwd(), config.mdxSources)
  const markdownString = fs.readFileSync(path.join(postsDir,
    slug + '.mdx'), 'utf-8')
  const { data: frontMatter, content } = matter(markdownString)
  const mdxSource = await serialize(content, { mdxOptions: {
    remarkPlugins: [[remarkCodeHike, { theme: theme, autoImport: false }]],
    useDynamicImport: true, }
  })
  return {
    props: {
      frontMatter: frontMatter,
      slug: slug,
      mdxSource: mdxSource,
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage

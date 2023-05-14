import Link from "next/link"
import { config } from "../blog.config"
// TODO: CSS styles to delineate rows instead of <p>

// Set LOCAL_DEBUG to false before publishing.
// Once the following bug is fixed we should be able to use typeof window === 'undefined'.
// https://github.com/vercel/next.js/issues/19922
const LOCAL_DEBUG = false

export const PostPreview = ({post}) => {
  return (
    <div>
      <h1>{post.frontMatter.title}</h1>
      <p>
        {post.frontMatter.date}
      </p>
      <p>
        {post.frontMatter.description}
      </p>
      <p>
      <span role='img' aria-label='one coffee'>
        ☕&nbsp;{post.frontMatter.readTime + ' min read'}
      </span>
      </p>
      <Link href={"/blog/" + post.slug + (LOCAL_DEBUG ? "" : ".html")} passHref>
        Read more
      </Link>&nbsp;&rarr;
    </div>
  )
}

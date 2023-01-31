import Link from "next/link"
// TODO: CSS styles to delineate rows instead of <p>
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
      <Link href={"/blog/" + post.slug} passHref>
        Read more
      </Link>&nbsp;&rarr;
    </div>
  )
}

import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {

  return (
    <article>
      <HeadPost/>
      <Link href={"/blog" + post.realSlug}>
        Read more...
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 3rem;
          }
        `}
      </style>
    </article>
  );
};

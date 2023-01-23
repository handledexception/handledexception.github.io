import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        Read more &rarr;
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

import { Post } from "../components/Post";
import { posts } from "../getAllPosts";

export default function IndexPage() {
  if (!posts) return null;
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}

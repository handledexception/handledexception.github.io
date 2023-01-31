// function importAll(r) {
//     return r.keys().map((fileName) => ({
//       link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
//       module: r(fileName)
//     }));
//   }
  
//   export const posts = importAll(
//     require.context("./pages/blog/", true, /\.mdx$/)
//   );

import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

export function getSlugs(p) {
    return fs.readdirSync(p);
}
export function importAll(p) {
  const postsDir = join(process.cwd(), p);
  const slugs = getSlugs(postsDir);
  const posts = slugs.map(s => {
    const slug = s.replace(/\.mdx$/, "");
    const fullPath = join(postsDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug, data, content };
  }).filter(post => post);
  return posts;
}

export function Posts() {
    const posts = importAll("./pages/blog");
    return posts;
}

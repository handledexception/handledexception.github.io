# handledexception.github.io

Paul Hindt's GitHub Pages blog.

## Building
```
$ npm run build
$ npm run export
```

The new build of the blog will be generated in the `out` directory.

## Publish to GitHub Pages
```
git checkout publish
git add out
git commit -m "Publishing new changes to the blog"
git push
```

The changes will show up on https://handledexception.github.io/ shortly.

---

### Technologies:
- [nextjs](https://nextjs.org/) - [https://github.com/vercel/next.js/](https://github.com/vercel/next.js/)
- [mdx](https://mdxjs.com/) - [https://github.com/mdx-js/mdx](https://github.com/mdx-js/mdx)
- [code-hike](https://codehike.org/) - [https://github.com/code-hike/codehike](https://github.com/code-hike/codehike)

### References:
- https://github.com/vercel/next.js/tree/canary/examples/with-mdx-remote
- https://github.com/ebenezerdon/nextjs-mdx-blog
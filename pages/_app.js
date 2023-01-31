import "@code-hike/mdx/styles"

import Head from "next/head";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { config } from "../blog.config"

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={config.description}></meta>
      <title>{config.title}</title>
    </Head>
    <Nav />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

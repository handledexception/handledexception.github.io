import "@code-hike/mdx/styles"

import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Handled Exception" description="The blog of Paul Hindt">
      <Component {...pageProps} />
    </Layout>
  );
}

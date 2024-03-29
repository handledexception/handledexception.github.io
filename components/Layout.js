export default function Layout({ children }) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap");
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
          background: #333;
          color: #fff;
          font-size: 1rem;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: 700;
          font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        a {
          color: #fff;
        }
        .content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
      `}</style>
      <main>
        <div className="content">{children}</div>
      </main>
    </>
  );
}

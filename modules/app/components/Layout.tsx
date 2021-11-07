import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Head from "next/head";
import { Login } from "../../web3/components/Login";

export function Layout({
  children,
  rightColumn = (
    <React.Fragment>
      <Login />
    </React.Fragment>
  ),
}: {
  children: React.ReactNode;
  rightColumn?: React.ReactNode;
}): React.ReactElement {
  return (
    <React.Fragment>

      <Header />
      <Head>
        <title>Website title</title>
        <meta
          name="description"
          content="Website description."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="body">
        <div className="main">{children}</div>

        <div className="right">{rightColumn}</div>
      </div>
      <Footer />
      <style jsx>{`
          .body {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            max-width: 1500px;
            margin: 0 auto;
            flex-wrap: wrap;
          }

          .main {
            flex: 1;
            padding-left: 30px;
            padding-right: 30px;
          }

          .right {
            padding: 30px;
            width: 450px;
          }
        `}</style>
    </React.Fragment>
  );
}

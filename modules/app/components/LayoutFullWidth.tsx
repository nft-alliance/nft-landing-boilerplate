import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Head from "next/head";


export function LayoutFullWidth({
  children,
  
}: {
  children: React.ReactNode;
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

        </div>
        <Footer />
        <style jsx>{`
          .body {
            min-height: 100vh;
            padding: 0 0.5rem;
            max-width:100%;
            margin: 0 auto;
          }

          
        `}</style>
    </React.Fragment>
  );
}

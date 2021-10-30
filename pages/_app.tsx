import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React, Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEagerConnect, useInactiveListener } from "../modules/web3/hooks";
import NextNprogress from "nextjs-progressbar";
import { ModalProvider } from "../modules/app/context/ModalContext";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App({ Component, pageProps }: AppProps) {
  const context = useWeb3React<Web3Provider>();
  const { connector } = context;

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = useState<any>();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();

  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div>
      <NextNprogress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
      <ToastContainer />
      <style jsx global>{`
        @font-face {
          font-family: "Londrina Solid";
          src: url(/static/fonts/Londrina_Solid/LondrinaSolid-Black.ttf);
          src: url(/static/fonts/Londrina_Solid/LondrinaSolid-Regular.ttf);
        }
        @font-face {
          font-family: "PT Root UI";
          src: url(/static/fonts/PT_Root_UI/PT-Root-UI_Regular.ttf);
        }
        @font-face {
          font-family: "PT Root UI Medium";
          src: url(/static/fonts/PT_Root_UI/PT-Root-UI_Medium.ttf);
        }
        @font-face {
          font-family: "PT Root UI Bold";
          src: url(/static/fonts/PT_Root_UI/PT-Root-UI_Bold.ttf);
        }
        :root {
          --gap: 16pt;
          --page-background-color: black;
          --alt-background-color: grey;
          --text-main-color: white;
          --text-secondary-color: grey;
          --alt-text-main-color: green;
          --alt-text-secondary-color: grey;
          --mythic: #ff7a0e;
          --rare: #a8a9ad;
          --divine: #9d4edd;

          --z-index-modal: 1000;
          --z-index-header: 100;
          --accents-1: #f9fafc;
          --accents-2: #eaeaea;
          --accents-3: #999;
          --accents-4: #888;
          --accents-5: #666;
          --accents-6: #444;
          --accents-7: #333;
          --accents-8: #111;

          --background-color: #d63c5d13;
          --nounsdao-color: #d89eef;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        body {
          padding: 0;
          margin: 0;
          margin: 0;
          padding: 0;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.8;
          color: var(--text-main-color);
          background: var(--page-background-color);
          
        }

        @media only screen and (max-width: 600px) {
          body {
            font-size: 13px;
          }
        }
        a {
          color: blueviolet;
        }
        h1 {
          font-weight: 700;
        }

        p {
          margin-bottom: 10px;
        }

        * {
          box-sizing: border-box;
        }

        input {
          padding: 15px;
          border: none;
        }

        img {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
}
export default function AppWrapper(props) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <App {...props} />
    </Web3ReactProvider>
  );
}

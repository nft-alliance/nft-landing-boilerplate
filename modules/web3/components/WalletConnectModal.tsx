import { useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import React from "react";
import { toast } from "react-toastify";
import { injected } from "../connectors";
import { addNetwork } from "../lib/addNetwork";
import { network, supportedChainIds } from "../web3.constants";
import WalletButton, { WALLET_TYPE } from "./WalletButton";

export function WalletConnectModal(): React.ReactElement {
  const context = useWeb3React();

  function onClickBrowserProvider() {
    context.activate(injected, async () => {
      toast.error(
        "Error loggin in, make sure you are connected to the Arbitrum network."
      );

      try {
        const { ethereum } = window as any;
        addNetwork(context.account, ethereum);
      } catch (e) {
        console.log(e);
      }
    });
  }

  function onClickWalletConnect() {
    const walletlink = new WalletConnectConnector({
      supportedChainIds,
      chainId: network.chainId,
      rpc: {
        [network.chainId]: process.env.NEXT_PUBLIC_RPC_PROVIDER,
      },
    });
    context.activate(walletlink);
  }
  return (
    <div>
      <div className="buttons">
        <div className="button">
          <WalletButton
            walletType={WALLET_TYPE.metamask}
            onClick={onClickBrowserProvider}
          />
        </div>
        <div className="button">
          <WalletButton
            walletType={WALLET_TYPE.walletconnect}
            onClick={onClickWalletConnect}
          />
        </div>
        <div className="button">
          <WalletButton
            walletType={WALLET_TYPE.brave}
            onClick={onClickBrowserProvider}
          />
        </div>
      </div>
      <style jsx>{`
        .buttons {
          display: flex;
          padding: 15px;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .button {
          margin: 15px;
        }
      `}</style>
    </div>
  );
}

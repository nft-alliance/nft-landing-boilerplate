const toHex = (num) => {
  return "0x" + num.toString(16);
};
import Web3 from "web3";
import { network as chain } from "../web3.constants";
export function addNetwork(address: string, ethereum: any) {
  const params = {
    chainId: toHex(chain.chainId), // A 0x-prefixed hexadecimal string
    chainName: chain.name,
    nativeCurrency: {
      name: chain.nativeCurrency.name,
      symbol: chain.nativeCurrency.symbol, // 2-6 characters long
      decimals: chain.nativeCurrency.decimals,
    },
    rpcUrls: chain.rpc,
    blockExplorerUrls: [
      chain.explorers && chain.explorers.length > 0 && chain.explorers[0].url
        ? chain.explorers[0].url
        : chain.infoURL,
    ],
  };

  return ethereum
  .request({
    method: "wallet_addEthereumChain",
    params: [params, address],
  });

}

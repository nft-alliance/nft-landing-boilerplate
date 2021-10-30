import Web3 from "web3";
import logger from "../../app/lib/logger";
import abi from "../contract/abi.json";
import { TokenFromChain } from "../types/nft";

export async function getTokenOwner(tokenId: string): Promise<string> {
  try {
    var contractAddress = process.env.SMARTCONTRACT_ADDRESS;

    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.RPC_PROVIDER || "")
    );

    const myContract = new web3.eth.Contract(abi as any, contractAddress);

    const owner = await myContract.methods.ownerOf(tokenId).call();

    return owner;
  } catch (e: any) {
    logger("ERROR", e.message);
    return "";
  }
}

export async function getTokenFromChain(
  tokenId: number
): Promise<TokenFromChain | null> {
  try {
    var contractAddress = process.env.SMARTCONTRACT_ADDRESS;

    const web3 = new Web3(
      new Web3.providers.HttpProvider(process.env.RPC_PROVIDER || "")
    );

    const myContract = new web3.eth.Contract(abi as any, contractAddress);

    const tokenURI = await myContract.methods.tokenURI(tokenId).call();
    const owner = await myContract.methods.ownerOf(tokenId).call();

    return {
      tokenId,
      tokenURI,
      owner,
    };
  } catch (e: any) {
    logger("ERROR", e.message);
    return null;
  }
}

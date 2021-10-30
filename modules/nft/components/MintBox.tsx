import { useWeb3React } from "@web3-react/core";
import { Button } from "../../app/components/Button";
import { Login } from "../../web3/components/Login";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState } from "react";
import Web3 from "web3";
import abi from "../contract/abi.json";

export function MintBox() {
  const context = useWeb3React();
  const [loading, setLoading] = useState(false);


  function mint() {
    

    setLoading(true);
    const contractAddress = process.env.NEXT_PUBLIC_SMARTCONTRACT_ADDRESS;

    const web3 = new Web3(context.library.provider);

    const myContract = new web3.eth.Contract(abi as any, contractAddress);
    var weiValue = web3.utils.toWei("0.05", "ether");

    const options = {
      from: context.account,
      value: weiValue,
    };

    myContract.methods.mint().send(options, function (err, hash) {
      if (err) {
        toast.error("Error minting NFT");
      } else {
        toast.success("NFT minting in progress!");
      }
      setLoading(false);
    });
  }
  return (
    <div>
      {context.account && (
        <div>
          <Button loading={loading} tertiary onClick={mint}>
            Mint (0.05 ETH)
          </Button>
        </div>
      )}
      {!context.account && (
        <div>
          <p>Connect your wallet to mint a nft</p>
          <Login />
        </div>
      )}
      <style jsx>{`
        .name {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .action {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          margin-top: 15px;
        }

        .explanation {
          font-size: 12px;
          max-width: 400px;
        }
      `}</style>
    </div>
  );
}

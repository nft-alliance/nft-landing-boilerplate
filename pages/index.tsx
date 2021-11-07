import Link from "next/link";
import { Button } from "../modules/app/components/Button";
import { LayoutFullWidth } from "../modules/app/components/LayoutFullWidth";
import { MintBox } from "../modules/nft/components/MintBox";

export default function Home() {

  return (
    <LayoutFullWidth>
      <div className="teaser">
        <h2>My NFT</h2>
        <p>
          Yeah
        </p>
        <MintBox />
      </div>

     

      <div className="centered">
        <h2>About My NFT</h2>
        <p>
          Get one now


        </p>

        <MintBox />
      </div>
     

      <style jsx>{`
        .teaser {
          background: black;
          background-size: 100% 100%;
         
          padding: 100px;
          text-align: center;
          text-transform: uppercase;
          font-size: 18px;
        }

        @media only screen and (max-width: 600px) {
          .teaser {
            padding: 30px;
          }
        }

        .teaser h2 {
          color: white;
          font-size: 30px;
        }

        .teaser p {
          font-weight: 400;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
          max-width: 600px; 
          margin: 0 auto 40px;
        }

        .centered {
          max-width: 960px;
          margin: 0 auto;
          padding: 30px;
        }
      `}</style>
    </LayoutFullWidth>
  );
}

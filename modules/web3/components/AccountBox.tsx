import React from "react";
import AddressIcon from "./AddressIcon";
import Link from "next/link";

function formatAddress(address: string): string {
  return address.slice(0, 3) + "..." + address.slice(-3);
}

export function AccountBox({
  address,
}: {
  address: string;
}): React.ReactElement {
  return (
    <div>
      <Link href={`/gallery/${address}`}>
        <a>
          <div className="wrapper">
            <AddressIcon address={address} width="20px" />
            <div className="address">
              <div className="address-top">My account</div>
              <div className="address-bottom">{formatAddress(address)}</div>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .wrapper {
          padding: 8px;
          border-radius: 4px;
          background: var(--mythic);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
        }

        .address {
          margin-left: 8px;
        }

        a {
          color: white;
          text-decoration: none;
        }
        @media only screen and (max-width: 600px) {
          .wrapper {
            font-size: 9px;
          }
        }
      `}</style>
    </div>
  );
}

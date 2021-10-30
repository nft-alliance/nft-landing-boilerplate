import Link from "next/link";
import { Login } from "../../web3/components/Login";

export function Header() {
  return (
    <div>
      <div className="header-wrapper">
        <div className="header">
          <div className="left">
            <h1>
              <Link href="/">
                <a>Title</a>
              </Link>
            </h1>
          </div>
          <div className="right">
            <div className="links">
              <div className="link">
                <Link href="/mint">
                  <a>Mint</a>
                </Link>
              </div>

              <div className="link">
                <Link href="/other">
                  <a>Other</a>
                </Link>
              </div>
            </div>

            <div className="login-box">
              <Login />
            </div>
          </div>
        </div>
        <div className="sub-header">
          <div className="links">
            <div className="link">
              <a
                title="Join discord"
                href="https://discord.gg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </div>

            <div className="link">
              <Link href="/mint">
                <a>Mint</a>
              </Link>
            </div>

            <div className="link">
              <Link href="/faq">
                <a>FAQ</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .header-wrapper {
            width: 100%;
            top: 0;
            text-transform: uppercase;
            z-index: var(--z-index-header);
          }
          .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            background: black;
            padding: 15px;
          }

          .sub-header {
            background: rgb(29 29 73 / 70%);

            padding: 15px;
          }

          .links {
            display: flex;
            justify-content: space-between;
            max-width: 800px;
            margin: 0 auto;
            padding-left: 15px;
            padding-right: 15px;
            flex-wrap: wrap;
          }

          .link {
            margin-left: 15px;
            margin-right: 15px;
            font-size: 14px;
          }

          a {
            color: white;
            text-decoration: none;
          }

          h1 {
            padding: 0;
            margin: 0;
            font-size: 20px;
          }

          h1 a {
            color: var(--text-main);
            text-decoration: none;
          }

          @media only screen and (max-width: 600px) {
            .header .links {
              display: none;
            }
            .link {
              font-size: 10px;
            }

            h1 {
              font-size: 10px;
            }
          }

          .right {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}

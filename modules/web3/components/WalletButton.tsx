import { Button } from "../../app/components/Button";

export enum WALLET_TYPE {
  metamask = "Metamask",
  brave = "Brave",
  ledger = "Ledger",
  walletconnect = "WalletConnect",
  fortmatic = "Fortmatic",
  trezor = "Trezor",
  coinbaseWallet = "Coinbase Wallet",
}

const logo = (walletType: WALLET_TYPE) => {
  switch (walletType) {
    case WALLET_TYPE.metamask:
      return "/wallet-icons/metamask-fox.svg";
    case WALLET_TYPE.fortmatic:
      return "/wallet-icons/fortmatic.svg";
    case WALLET_TYPE.walletconnect:
      return "/wallet-icons/walletconnect-logo.svg";
    case WALLET_TYPE.brave:
      return "/wallet-icons/brave.svg";
    case WALLET_TYPE.ledger:
      return "/wallet-icons/ledger.svg";
    case WALLET_TYPE.trezor:
      return "/wallet-icons/trezor.svg";
    case WALLET_TYPE.coinbaseWallet:
      return "/wallet-icons/coinbase-wallet-dot.svg";
    default:
      return "";
  }
};

const WalletButton: React.FC<{ onClick: () => void; walletType: WALLET_TYPE }> =
  (props) => {
    const { onClick, walletType } = props;

    return (
      <div>
        <Button onClick={onClick}>
          <div className="button-content">
            <img src={logo(walletType)} alt={`${walletType} logo`} />
            {walletType}
          </div>
        </Button>
        <style jsx>{`
          .button-content {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          img {
            margin-right: 10px;
            border-radius: 5px;
            width: 20px;
          }
        `}</style>
      </div>
    );
  };
export default WalletButton;

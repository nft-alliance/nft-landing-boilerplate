import { useWeb3React } from "@web3-react/core";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Button } from "../../app/components/Button";
import { ModalContext } from "../../app/context/ModalContext";

import { AccountBox } from "./AccountBox";
import { WalletConnectModal } from "./WalletConnectModal";

export function Login() {
  const context = useWeb3React();
  const { setModalOpened, setModalContent } = useContext(ModalContext);


  function onClick() {
    setModalContent(<WalletConnectModal />)
    setModalOpened(true);
    
  }

  useEffect(() => {
    if (context.account) {
      setModalOpened(false);
    }
  }, [context.account, setModalOpened])

  return (
    <div>
      {context.account && (
        <div>
          <AccountBox address={context.account} />
        </div>
      )}
      {!context.active && <Button onClick={onClick}>Login</Button>}
      {context.error && <p className="error">Invalid network</p>}
      <style jsx>{`
        .error {
          font-size: 12px;
          color: red;
        }
      `}</style>
    </div>
  );
}

import React from "react";
import LoadingSpinner from "./LoadingSpinner";

export function Button({
  children,
  onClick,
  loading,
  primary,
  secondary,
  tertiary,
  disabled
}: {
  children: React.ReactNode;
  onClick?: () => void;
  loading?:boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?:boolean;
  disabled?: boolean
}): React.ReactElement {
  return (
    <React.Fragment>
      <button disabled={disabled} className={primary ? "primary" : secondary ? "secondary" : tertiary? 'tertiary': ''} onClick={onClick}>
        {!loading ? (
          <div className="children-wrapper">{children}</div>
        ) : (
          <LoadingSpinner />
        )}
      </button>
      <style jsx>{`
        button {
          background: #4ec74d;
          padding: 15px;
          color: white;
          cursor: pointer;
          border-radius: 1px;
          text-align: center;
          border: none;
          font-family: Atari;
          box-shadow: 2px 3px 3px 1px rgb(0 0 0 / 40%);
        }

        
        .button.loading {
          display: flex;
          justify-content: center;
          text-align: center;
        }
        .button.loading div {
          display: inline-block;
        }

        button.primary {
          background: blue;
        }

        button.secondary {
          background: var(--rare);
        }

        button.tertiary {
          background: var(--mythic);
        }
      `}</style>
    </React.Fragment>
  );
}

import React from 'react'

export type ModalOptions = {
  canClose: boolean
}

type PropTypes = {
  onClickClose: () => void,
  children: any,
  modalOptions: ModalOptions
}

export default function Modal ({ onClickClose = () => {}, children, modalOptions }: PropTypes) {
  return (
    <>
      <div className="modal-wrapper">
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            {modalOptions.canClose && <div className="modal-close" onClick={onClickClose}>
              Close
            </div>}
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
      <style jsx>{`
        .modal-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          z-index: var(--z-index-modal);
        }
        .modal-container {
          background: var(--accents-8);
          border-radius: 4px;
          position: absolute;
          left: 50%;
          transform: translate(-50%, -5vh);
          min-width: 40vw;
          max-width: 90vw;
          overflow-x: auto;
          overflow-y: auto;
          top:150px;
          max-height: 90%;
        }
        .modal-header {
          padding: 20px 20px 0 20px;
          position: sticky;
          top: 0;
          right: 0;
          display: flex;
          justify-content: flex-end;
          z-index: var(--z-index-modal);
        }
        .modal-content {
          padding: 20px;
          padding-top: 0px;
        }
        .modal-close {
          
          border: 1px solid var(--accents-3);
          color: var(--accents-3);
          border-radius: 4px;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        @media (max-width: 600px) {
          .modal-container {
            top: 10vh;
            width: 90vw;
          }
          .modal-content {
            padding: 20px;
          }
        }
      `}</style>
    </>
  )
}
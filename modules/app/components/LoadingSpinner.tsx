import { memo } from 'react'

interface Props {
  width?: string | number
}

function LoadingSpinner({ width = '1.5em' }: Props) {
  return (
    <>
      <div className={`loading-spinner`}>
        <div className="ring" />
      </div>
      <style jsx>{`
        .loading-spinner .ring:after {
          content: ' ';
          display: block;
          width: ${width};
          height: ${width};
          border-radius: 50%;
          border: 0.15em solid;
          border-color: white rgba(255,255,255,0.4) rgba(255,255,255,0.4);
          animation: lds-dual-ring 1.2s linear infinite;
        }
       
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default memo(LoadingSpinner)
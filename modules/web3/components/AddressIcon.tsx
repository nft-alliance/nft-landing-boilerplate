import { Jazzicon } from '@ukstv/jazzicon-react';

export default function AddressIcon({ address, width = '22px' } : { address: string, width?: string }): React.ReactElement {
  return (
    <div style={{width: width, height: width}}>
      <Jazzicon address={address}  />
    </div>
  );
}
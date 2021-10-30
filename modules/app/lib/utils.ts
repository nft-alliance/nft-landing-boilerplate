
export function getHttpImageFromIpfs(image: string): string {
  return `https://ipfs.io/${image.replace("ipfs://", "ipfs/")}`;
}


export function formatAddress(address: string): string {
  return address.slice(0, 7) + "..." + address.slice(-4);
}

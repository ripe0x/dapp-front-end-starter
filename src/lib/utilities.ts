import { CHAIN_ID_NUMBER, EthereumAddress } from "./typings";

export const getChainName = (chainId: number) => {
  switch (chainId) {
    case 1:
      return 'mainnet';
    case 5:
      return 'goerli';
    case 11155111:
      return 'sepolia';
    case 10:
      return 'optimism';
    case 420:
      return 'optimism-goerli';
    case 8453:
      return 'base';
    case 84531:
      return 'base-goerli';
    case 7777777:
      return 'zora';
    case 999:
      return 'zora-goerli';
    case 31337:
      return 'foundry';
    default:
      return 'unknown';
  }
}

export const getAlchemyChainLabel = (chainId: CHAIN_ID_NUMBER) => {
  switch (chainId) {
    case 1:
      return 'eth-mainnet';
    case 5:
      return 'eth-goerli';
    case 10:
      return 'opt-mainnet';
    case 420:
      return 'opt-goerli';
    case 8453:
      return 'base-mainnet';
    case 84531:
      return 'base-goerli';
    case 31337:
      return '';
    case 7777777:
      return 'zora-mainnet';
    case 999:
      return 'zora-goerli';
    default:
      return 'unknown';
  }
}

export const linkToAddressOnBlockExplorer = (address: EthereumAddress, chainId: number) => {
  const chainName = getChainName(chainId);
  const subdomain = (chainName === 'goerli' || chainName === 'sepolia') ? `${chainName}.` : '';
  if (chainName === 'zora' || chainName === 'zora-goerli') {
    const subdomain = chainName === 'zora-goerli' ? 'testnet.' : '';
    return `https://${subdomain}explorer.zora.energy/address/${address}`;
  }
  return `https://${subdomain}etherscan.io/address/${address}`;
}

export const trunc = (address: string, amount: number = 4) =>
  `${address?.slice(0, amount)}...${address?.slice(
    address.length - amount,
    address.length,
  )}`;

export const getRandomNum = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}
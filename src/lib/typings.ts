import { Chain as WagmiChain } from 'wagmi'
export type EthereumAddress = `0x${string}`;
export type EthereumTransactionHash = `0x${string}`;
export type EthereumCalldata = string;
export type IPFSAddress = string;
export type AddressType = `0x${string}`
export type BytesType = `0x${string}`
export type CHAIN_ID_NUMBER = 1 | 5 | 11155111 | 10 | 420 | 8453 | 84531 | 7777777 | 999 | 31337;
export const enum CHAIN_ID {
  ETHEREUM = 1,
  GOERLI = 5,
  OPTIMISM = 10,
  OPTIMISM_GOERLI = 420,
  BASE = 8453,
  BASE_GOERLI = 84531,
  ZORA = 7777777,
  ZORA_GOERLI = 999,
  FOUNDRY = 31337,
}
export interface Chain extends WagmiChain {
  id: CHAIN_ID
  slug: string
  icon: string
}

// used for demo
export interface Proposal {
  id: string;
  title: string;
  description: string;
}
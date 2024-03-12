import JSBI from 'jsbi'
import { DeploymentInfo } from './config'
// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 81457,
  BLAST_SEPOLIA = 168587773
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MULTICALL_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: "0x6179bAec451c2aF7A9695F5d3e9De4B32be9005c",
  [ChainId.BLAST_SEPOLIA]: "0x632251ef569845267BEEFb972e7ff983Ba3377c8",
}
export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: DeploymentInfo[ChainId.MAINNET].router.proxyAddress,
  [ChainId.BLAST_SEPOLIA]: DeploymentInfo[ChainId.BLAST_SEPOLIA].router.proxyAddress,
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: DeploymentInfo[ChainId.MAINNET].factory.proxyAddress,
  [ChainId.BLAST_SEPOLIA]: DeploymentInfo[ChainId.BLAST_SEPOLIA].factory.proxyAddress,
}

export const INIT_CODE_HASH = '0xe178bcd2107b966bbc437b317a2d6f0f8eaba9ca62ff6ec77c7b691f0c2d89d1'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

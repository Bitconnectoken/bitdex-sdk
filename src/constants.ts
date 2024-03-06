import JSBI from 'jsbi'
import { DeploymentInfo } from './config'
// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 81457,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
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
export const MULTICALL3_TESTNET = '0x2FDDaa20266E88dD7E6D0c4DfbCcBe5125a3dF79'

export const ROUTER_ADDRESS = DeploymentInfo[ChainId.MAINNET].router.proxyAddress

export const FACTORY_ADDRESS = DeploymentInfo[ChainId.MAINNET].factory.proxyAddress

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

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import "hardhat-watcher"
import './scripts/copy-uniswap-v3-artifacts.ts'
import './tasks/hypervisor'
import './tasks/swap'
import { parseUnits } from 'ethers/lib/utils'
import { HardhatUserConfig } from 'hardhat/types'
require('dotenv').config()
const mnemonic = process.env.DEV_MNEMONIC || ''
const archive_node = process.env.ETHEREUM_ARCHIVE_URL || ''

const config: HardhatUserConfig = {
  networks: {
      hardhat: {
          allowUnlimitedContractSize: false,
          /*
          accounts: [ { privateKey: process.env.PRIVATE_KEY, balance: '10000000000000000000000' } ],
          forking: {
            url: "https://mainnet.infura.io/v3/process.env.InfuraKey",
            // url: "https://eth-mainnet.alchemyapi.io/v2/process.env.AlchemyKey",
            blockNumber: 12587891
          }
          */
      },
      Optimism_Testnet: {
        url: 'https://kovan.optimism.io',
        accounts: [process.env.PRIVATE_KEY as string]
      }, 
      
      Optimism_local: {
        url: "http://127.0.0.1:8545",
        accounts: {
          mnemonic: "test test test test test test test test test test test junk",
        },
      },
      Arbitrum_Testnet: {
        url: "https://rinkeby.arbitrum.io/rpc",
        accounts:[process.env.PRIVATE_KEY as string]
      },
      Arbitrum_Mainnet: {
        url: "https://arb1.arbitrum.io/rpc",
       accounts:[process.env.PRIVATE_KEY as string]
      },
      goerli: {
        url: 'https://goerli.infura.io/v3/' + process.env.INFURA_ID,
        accounts: {
          mnemonic,
        },
        gasPrice: parseUnits('130', 'gwei').toNumber(),
      },
      bsc: {
        url: 'https://bsc-dataseed1.binance.org',
        accounts: {
          mnemonic,
        },
        // gasPrice: parseUnits('130', 'gwei').toNumber(),
      },
      kovan: {
        url: 'https://kovan.infura.io/v3/' + process.env.INFURA_ID,
        accounts: {
          mnemonic,
        },
        gasPrice: parseUnits('60', 'gwei').toNumber(),
      },
       mainnet: {
         url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
         accounts: [process.env.PRIVATE_KEY as string],
       },
       rinkeby: {
         url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
         accounts: [process.env.PRIVATE_KEY as string],
       },
  },
  watcher: {
      compilation: {
          tasks: ["compile"],
      }
  },
  solidity: {
      version: '0.7.6',
      settings: {
          optimizer: {
              enabled: true,
              runs: 800,
          },
          metadata: {
              // do not include the metadata hash, since this is machine dependent
              // and we want all generated code to be deterministic
              // https://docs.soliditylang.org/en/v0.7.6/metadata.html
              bytecodeHash: 'none',
          },
      },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY,
  },
  mocha: {
    timeout: 2000000
  }
}
export default config;
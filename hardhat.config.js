require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();
require('hardhat-deploy');

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const GEORLI_RPC_URL = process.env.GEORLI_RPC_URL;

module.exports = {
  solidity: '0.8.9',
  defaultNetwokk: 'hardhat',
  networks: {
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
      blockConfirmations: 6,
    },

    georli: {
      chainId: 5,
      accounts: [PRIVATE_KEY],
      url: GEORLI_RPC_URL,
      blockConfirmations: 6,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  },
};

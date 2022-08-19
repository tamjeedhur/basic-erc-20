const { network } = require('hardhat');
const { verify } = require('../utils/verify');

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  //   const chainId = network.config.chainId;
  const args = [];
  const erc20 = await deploy('ERC20Token', {
    from: deployer,
    args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  // // if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
  await verify(erc20.address, args);
  // // }
  log('------------------------------------------------');
};

module.exports.tags = ['all', 'erc20'];

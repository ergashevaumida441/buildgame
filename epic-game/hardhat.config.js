require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'goerli API',
      accounts: ['私钥'],
    },
  },
};

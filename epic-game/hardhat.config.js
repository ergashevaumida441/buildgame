require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'https://dawn-newest-meadow.ethereum-goerli.discover.quiknode.pro/1fe2992263f34758281995b742078f90533daf44/',
      accounts: ['e1482a4c6a4f2dfe460487818381bdbf855bc7228baa3f5036181eb7b7980bb8'],
    },
  },
};
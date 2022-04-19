const HDWalletProvider = require('@truffle/hdwallet-provider');
//
// const fs = require('fs');
const infuraKey = ""
const mnemonic = ""

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, ``),
      network_id: 4,       // Ropsten's id
      gas: 4000000, // rinkeby has a lower block limit than mainnet
      gasPrice: 4000000000,
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
     },
  },
  compilers: {
    solc: {
      version: "^0.4.24" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  }
};
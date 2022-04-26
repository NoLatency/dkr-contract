const HDWalletProvider = require("truffle-hdwallet-provider-klaytn");

const privateKeys = {
    baobab: '',
    cypress: ''
}

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // for ganache
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 80000000
    },
    baobab: {
      provider: () => { return new HDWalletProvider(privateKeys.baobab, "https://api.baobab.klaytn.net:8651") },
      network_id: '1001', //Klaytn baobab testnet's network id
      gas: '8000000',
      gasPrice: null
    },
    cypress: {
      provider: () => { return new HDWalletProvider(privateKeys.cypress, "https://public-node-api.klaytnapi.com/v1/cypress") },
      network_id: '8217', //Klaytn mainnet's network id
      gas: '8000000',
      gasPrice: null,
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.6",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "constantinople"
      }
    }
  }
}

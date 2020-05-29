# ethereum-erc20-token-example

ERC20 Token Example deployed on Rinkeby Test Net

## Getting Started

1) Verify you have the Truffle (v5.0.2) latest installed if not use the command `npm install -g truffle`

2) Use `mkdir SampleToken` to create a directory

3) `cd SampleToken`

4) Run the command: `truffle init` to initialize a truffle project.

5) Run `npm install --save truffle-hdwallet-provider` used to set up the provider to connect to the Infura Node

6) Run `npm install openzeppelin-solidity@2.0.0`

## Setup Infura

1. Go to https://infura.io

2. Click on “Get Started for FREE”. Once you sign up, you will be sent an email. Confirm your email address.

3. Now go back to the Infura website, to get the API key. he easiest way is to click on “Learn How Infura Works” as seen below

4. Click on “Skip” button that you see on the screen. Then click on “Create New Project”. Give any name to your project…

5. Now, from the endpoint, copy the link for whichever network’s node you would want to connect to, for example, Rinkeby.

## Setup Truffle Config

```javascript
const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "<Infura PROJECT ID>";
//
// const fs = require('fs');
const mnemonic = "<METAMASK SEED>";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
     },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
}

```

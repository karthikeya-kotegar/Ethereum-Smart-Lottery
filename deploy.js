const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// deploy the contract in rinkeby ethereum network with our ethereum account using providers.
// pass the valid mnemonics to unlock the ethereum account.
// using Infura Api we can connect to the real rinkeby network node.
const provider = new HDWalletProvider(
    'year toe lab radar core ribbon client odor style hungry goose method',
    'https://rinkeby.infura.io/v3/fe1c24d8eaba43c3835a7f2a1c8aec39',
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('attempting to deploy from account', accounts[0]);

    // Send the interface[ABI] to web3, deploy the bytecode to ethereum network and send the message with the gas price.
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({from: accounts[0], gas: '1000000'})

    console.log("'contract deployed:", result.options.address);
};
deploy();
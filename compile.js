const path = require('path');
const fs = require('fs');
const solc = require('solc');

// to get the path of the contract sol file.
const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
// to read the contract file
const source = fs.readFileSync(lotteryPath, 'utf-8');

// compile solidity file and number of contract files
module.exports =  solc.compile(source, 1).contracts[':Lottery'];
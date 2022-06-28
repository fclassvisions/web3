// Import web3
const Web3 = require("web3");

// Setup web3
const web3Provider = new Web3.providers.HttpProvider("YOUR_INFURA_URL");
const web3 = new Web3(web3Provider);

// Create an Account
const account = web3.eth.accounts.create();
console.log("My New Account:", account);

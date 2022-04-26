var MinterContract = artifacts.require('MinterContract');
var DKReverse = artifacts.require('DKReverse');

module.exports = async function(deployer) {
  const dkrAddress = await DKReverse.deployed();

  await deployer.deploy(MinterContract, dkrAddress);
};

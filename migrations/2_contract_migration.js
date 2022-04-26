var DKReverse = artifacts.require('DKReverse');

module.exports = async function(deployer) {
  await deployer.deploy(DKReverse);
};

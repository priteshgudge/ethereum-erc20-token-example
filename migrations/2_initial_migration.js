var SampleToken = artifacts.require("SampleToken");

module.exports = function(deployer) {
  deployer.deploy(SampleToken, "PriteshSampleToken", "PST", 5, 50000000000);
};

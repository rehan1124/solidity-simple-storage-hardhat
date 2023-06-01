const { ethers, run, network } = require("hardhat");
require("@nomicfoundation/hardhat-verify");

async function verify(contractAddress, args) {
  // --- Works on Etherscan ---
  console.log("--- Verifying contract ---");
  try {
    await run("verify: verify", {
      address: contractAddress,
      constructorArgsParams: args,
    });
  } catch (error) {
    console.log(error);
  }
}

async function main() {
  console.log("--- Starting deployment ---");

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(`Deployed contract address: `, simpleStorage.address);

  console.log("--- Deployment done ---");

  // --- Run verification only if it's not a Hardhat network
  // if (network.config.chainId != 31337) {
  //   await simpleStorage.deployTransaction.wait(3);
  //   verify(simpleStorage.address, []);
  // } else {
  //   console.log("Contract has been verified already!!!");
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

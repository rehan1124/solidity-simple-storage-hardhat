const { ethers } = require("hardhat");

async function main() {
  console.log("--- Starting deployment ---");

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(`Deployed contract address: `, simpleStorage.address);

  console.log("--- Deployment done ---");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

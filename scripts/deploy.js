const { ethers } = require("hardhat");

async function main() {
  console.log("--- Starting deployment ---");

  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");

  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(`Deployed contract address: `, simpleStorage.address);

  console.log("--- Deployment done ---");

  // --- Let's do some testing ---
  console.log("--- Basic test ---");

  const currFvNumber = await simpleStorage.retrieve();
  console.log(`Current favorite number: ${currFvNumber}`);

  // Updated favorite number to 13
  const updateFvNumberTo = await simpleStorage.store(13);
  await updateFvNumberTo.wait(1);
  const updatedFvNumber = await simpleStorage.retrieve();
  console.log(
    `Updated favorite number to: ${updatedFvNumber}`,
    updatedFvNumber == 13
  );

  console.log("--- Testing completed ---");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });

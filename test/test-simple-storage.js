const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("When SimpleStorage contract is deployed", function () {
  let simpleStorageFactory, simpleStorage;

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await simpleStorageFactory.deploy();
    console.log(`Deployed contract at address: `, simpleStorage.address);
  });

  it("Should start with favorite number of 0", async function () {
    const currFvNumber = await simpleStorage.retrieve();
    assert.equal(currFvNumber, 0);
  });

  it("Should update on calling store() function", async function () {
    const newValue = 13;
    const updateFvNumberTo = await simpleStorage.store(newValue);
    console.log(
      "Waiting for transaction confirmation with atleast 1 block added..."
    );
    await updateFvNumberTo.wait(1);
    const updatedFvNumber = await simpleStorage.retrieve();
    // assert.equal(updatedFvNumber, newValue);
    expect(updatedFvNumber).to.equal(newValue);
  });
});

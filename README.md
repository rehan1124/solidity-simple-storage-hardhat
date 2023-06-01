# solidity-simple-storage-hardhat

### Hardhat project demonstrating compiling and deployment

- Run `npm install` to have setup and packages

- Run `npx hardhat clean` to clean-up the artifacts and cache folder

- After cleanup, run `npx hardhat compile` to compile solidity contract present in contracts folder

- After compile process completes, run `npx hardhat run .\scripts\deploy.js` to deploy the contract into local Hardhat network. You would also see address at which contract is deployed on console screen.

- Deployment on testnets such as Sepolia would be different. Run below command and observe the output.

```
Command:
npx hardhat run .\scripts\deploy.js --network sepolia

Output:
--- Starting deployment ---
Deployed contract address:  0xE94F3cCE3ABb7ED5f954e6fb87fdFfc304D66c5B
--- Deployment done ---
```

- Post deployment, to verify smart-contract on Etherscan, run below command. You will see a success/confirmation message or if contract has been verified already, a different message will be displayed.

```
npx hardhat verify --network sepolia 0xb1b64Df23d5BD50E3bF2d3b5D83c1b67E6010C6A

npx hardhat verify --network sepolia <Smart-contract address>

If contract is verifed already, then this will be the message:
The contract 0xb1b64Df23d5BD50E3bF2d3b5D83c1b67E6010C6A has already been verified
```

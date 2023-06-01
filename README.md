# solidity-simple-storage-hardhat

Hardhat project

- Run `npx hardhat clean` to clean-up the artifacts and cache folder

- Run `npx hardhat compile` to compile solidity contract present in contracts folder

- Run `npx hardhat run .\scripts\deploy.js` to deploy the contract into local Hardhat network. You would also see address at which contract is deployed on console screen.

- Deployment on testnets such as Sepolia would be different. Run below command and observe the output.

```
Command:
npx hardhat run .\scripts\deploy.js --network sepolia

Output:
--- Starting deployment ---
Deployed contract address:  0xE94F3cCE3ABb7ED5f954e6fb87fdFfc304D66c5B
--- Deployment done ---
```

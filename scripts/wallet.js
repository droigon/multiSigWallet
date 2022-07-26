// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  
  

  const lockedAmount = hre.ethers.utils.parseEther("1");
  const array = ['0x1aE0EA34a72D944a8C7603FfB3eC30a6669E454C','0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db','0x617F2E2fD72FD9D5503197092aC168c91465E7f2']
  const no = 2

  const Lock = await hre.ethers.getContractFactory("MultiSigWallet");
  const lock = await Lock.deploy(array, no);

  await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

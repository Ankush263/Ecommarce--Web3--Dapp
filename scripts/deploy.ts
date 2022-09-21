// import { hre } from 'hardhat'
import ethers from "@nomiclabs/hardhat-ethers"
const hre = require("hardhat")

async function main() {

  const MarketPlace = await hre.ethers.getContractFactory("Ecommarce");
  const marketPlace = await MarketPlace.deploy();

  await marketPlace.deployed();

  console.log(`MarketPlace deployed to ${marketPlace.address}`);

  // console.log(ethers)
  // console.log(hre.ethers)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x525f07455ff2AbD2f261646B540A0b632480f610
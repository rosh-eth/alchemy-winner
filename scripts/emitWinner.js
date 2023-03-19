// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractAt(
    "Contract",
    "0x3C6159e001B4D0718b5Ed0706F5596061FF99AE8"
  );

  await contract.emitWinner("0xcf469d3beb3fc24cee979eff83be33ed50988502");
  console.log("Winner emitted");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

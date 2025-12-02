import { ethers } from "hardhat";

async function main() {
  const partyNames = ["Bhartiya GenZ Party", "Sooryavansham", "Brahmax 1.O", "Team Vasiliades"];

  const VotingDApp = await ethers.getContractFactory("VotingDApp");

  const voting = await VotingDApp.deploy(partyNames);

  // Remove this line in ethers v6: await voting.deployed();

  console.log("VotingDApp deployed to:", voting.target ?? voting.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.0",  // should match your contract pragma
  paths: {
    sources: "./smart-contracts/contracts",
    artifacts: "./smart-contracts/artifacts",
    cache: "./smart-contracts/cache",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    }
  }
};

export default config;

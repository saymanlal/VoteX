import { ethers } from "ethers";
import contractAbi from "../abi/VoteX.json"; // export ABI from hardhat

const contractAddress = "PASTE_YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

export function getContract() {
  if (!window.ethereum) throw new Error("No crypto wallet found");
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractAbi.abi, signer);
}

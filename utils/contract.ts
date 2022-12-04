import ContractAbi from "../artifacts/contracts/OurTube.sol/Ourtube.json"
import { ethers } from "ethers"

export default function getContract() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  let contract = new ethers.Contract(
    "0x0dD779eb89DF2783098F85027d09C6cb59F1dA9B",
    ContractAbi.abi,
    signer
  )
  console.log(contract)
  return contract
}

import { ethers } from "ethers";
import { ContractFactory } from "ethers";
const contractAbi = require("../abi/Multisig.json");
const contractByteCode = require("../abi/bytecode.json");

async function OnCreate({ owners }) {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const owner = owners;
  const number = owner.length;

  const factory = new ContractFactory(contractAbi, contractByteCode, signer);
  const contract = await factory.deploy(owner, number);
  return contract.address;
}

export default OnCreate;

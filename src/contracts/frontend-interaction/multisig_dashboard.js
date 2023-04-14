const { ethers } = require("ethers");

async function fetchIndex(index,address) {
  const Multisigabi = require("../abi/Multisig.json");
  const Multisigaddr = address;

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const contract_provider = new ethers.Contract(
    Multisigaddr,
    Multisigabi,
    provider
  );

  const txnlen = await contract_provider.gettxnlen();
  const len = parseInt("" + txnlen.txlen, 16);
  console.log(txnlen);

  const txndeets = await contract_provider.getTransaction(index);
  return txndeets;
}

export default fetchIndex;

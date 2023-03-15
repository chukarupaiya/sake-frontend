const { ethers} = require("ethers");
async function  Multisig_execute(index,grp_multisig_address){
    const Multisigabi = require("../abi/Multisig.json");
    const Multisigaddr = ""+grp_multisig_address;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();

  const contract_signer = new ethers.Contract(
    Multisigaddr,
    Multisigabi,
    signer
  );




  const executetxn  = await contract_signer.executeTransaction(index,{gasLimit: 210000})


}

export default Multisig_execute;
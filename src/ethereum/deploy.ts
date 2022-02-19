import Web3 from "web3";
import data from "./compile";

const deploy = async () => {
  const web3 = new Web3("http://localhost:7545");

  const abi = data.abi;
  const bytecode = data.evm.bytecode.object;
  const accounts = await web3.eth.getAccounts();

  const election = new web3.eth.Contract(abi, accounts[0]);

  await election
    .deploy({
      data: bytecode,
    })
    .send({ from: accounts[0], gas: 1500000, gasPrice: "30000000000000" });
};

export default deploy;

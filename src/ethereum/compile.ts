import path from "path";
import fs from "fs";
import solc from "solc";

const contractPath = path.resolve(__dirname, "contracts", "Election.sol");
const source = fs.readFileSync(contractPath, "utf-8");

const input = {
  language: "Solidity",
  sources: {
    "Election.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
        "": [
          "ast", // Enable the AST output of every single file.
        ],
      },
      // Enable the abi and opcodes output of MyContract defined in file def.
      def: {
        MyContract: ["abi", "evm.bytecode.opcodes"],
      },
    },
  },
};

const { contracts } = JSON.parse(solc.compile(JSON.stringify(input)));

export default contracts["Election.sol"]["Election"];

const ethers = require("ethers");
const rpcURL = "https://rpc.sepolia.org";
const provider = new ethers.JsonRpcProvider(rpcURL);

const queryHelperAbi =
  require("./out/GroupQueryHelper.sol/GroupQueryHelper.json").abi;

const contractAddress = "0x63713040f7e1B1F3CBbc0a1430e2416738b6F2Dd";

const contract = new ethers.Contract(contractAddress, queryHelperAbi, provider);

async function queryGroup(groupAddress) {
  const { director, members } = await contract.queryGroup(groupAddress);
  console.log(director);
  console.log(members);
}

queryGroup("0xb362316D8B1dF06dAD7D8665Df0Cf02d3854Ac93");

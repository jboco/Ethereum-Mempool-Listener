//import {ethers} from "ethers"
const ethers = require("ethers")
import {config} from "dotenv"
config ();


async function mempoolListener() {
    const WsProvider = new ethers.providers.WebSocketProvider('wss://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}');
    WsProvider.on("pending", async (tx) => {
    const  txInfo = await WsProvider.getTransaction(tx);
    console.log(txInfo);
    });

   
}

mempoolListener();

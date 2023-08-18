const ethers = require("ethers");

async function mempoolListener() {
    const WsProvider = new ethers.providers.WebSocketProvider("ADD_YOUR_ETHEREUM_NODE_WSS_URL"); 
    WsProvider.on("pending", async (tx) => {
    const  txInfo = await WsProvider.getTransaction(tx);
    console.log(txInfo);
    });

   
}

mempoolListener();

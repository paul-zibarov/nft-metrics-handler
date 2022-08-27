import { ethers, Event } from "ethers";
import { Server } from "socket.io";

import nftABI from './abi/nft.json';
import { Transfer } from "./models/Transfer";

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

const token = new ethers.Contract("0x60E4d786628Fea6478F785A6d7e704777c86a7c6", nftABI, provider);

export const handleTransferEvent = async (socket: Server) => {
    console.log("Start handling 'Transfer' event.")
    token.on("Transfer", async (from, to, tokenId, event) => {
        try {
            let tx = await event.getTransaction()
            let transfer = new Transfer(from, to, tokenId, tx.hash, tx.value);
            socket.emit("Transfer", transfer);
        } catch(e) {
            console.log(e)
        }
    }) 
}
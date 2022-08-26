import { ethers, Event } from "ethers";
import { Server } from "socket.io";

import nftABI from './abi/nft.json';
import { Transfer } from "./models/Transfer";

const rpc = "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
const provider = new ethers.providers.JsonRpcProvider(rpc);

const token = new ethers.Contract("0x60E4d786628Fea6478F785A6d7e704777c86a7c6", nftABI, provider);

export const handleTransferEvent = async (socket: Server) => {
    console.log("Start handling 'Transfer' event.")
    // token.queryFilter("Transfer", -100, "latest").then(async (events) => {
    token.on("Transfer", async (from, to, tokenId, event) => {
        try {
            console.log(event)
            let tx = await event.getTransaction()
            let transfer = new Transfer(from, to, tokenId, tx.hash, tx.value);
            console.log(transfer);
            socket.emit("Transfer", transfer);
        } catch(e) {
            console.log(e)
        }
    }) 
}
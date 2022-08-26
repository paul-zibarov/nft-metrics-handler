import { BigNumber } from "ethers";

export class Transfer {
    from: string;
    to: string;
    tokenId: BigNumber;
    txHash: string;
    value: BigNumber;

    constructor(from: string, to: string, tokenId: BigNumber, txHash: string, value: BigNumber) {
        this.from = from;
        this.to = to;
        this.tokenId = tokenId;
        this.txHash = txHash;
        this.value = value;
    }
}
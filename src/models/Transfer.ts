export class Transfer {
    from: string;
    to: string;
    tokenId: string;
    txHash: string;
    value: string;

    constructor(from: string, to: string, tokenId: string, txHash: string, value: string) {
        this.from = from;
        this.to = to;
        this.tokenId = tokenId;
        this.txHash = txHash;
        this.value = value;
    }
}
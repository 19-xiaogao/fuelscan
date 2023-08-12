export type Address = `0x${string}`;

export enum ThemeColor {
    Light,
    Dark
}
export enum BlockType {
    Block,
    Transaction
}

export interface IContext {
    themeColor: ThemeColor,
    handleSetThemeColor: (val: ThemeColor) => void;
}

export interface Block {
    id: Address,
    height: number,
    da_height: number,
    application_hash: Address,
    output_messages_root_hash: Address,
    transactions_root: Address,
    prev_root: Address,
    coinbase: string,
    coinbase_hash: Address,
    coinbase_amount: string,
    timestamp: number,
    count: number
}


export interface Transaction {
    id: Address,
    height: number,
    block_hash: Address,
    tx_type: String,
    da_height: number,
    gas_limit: string,
    gas_price: string,
    timestamp: number,
    sender: string,
    status: string,
    reason: any,
}

export interface BlockDetail extends Block {
    transactions: Transaction[]
}


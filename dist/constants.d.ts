import JSBI from 'jsbi';
export * from './numbers';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    RINKEBY = 4,
    FUJI = 43113,
    AVALANCHE = 43114
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
/**
 * DEX SDK
 */
export declare const FACTORY_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JOE_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MASTERCHEF_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MASTERCHEF_V3_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BAR_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ZAP_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROUTER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAKER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const ROLL_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGHELPER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGHELPER_MCV3_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGTOKENSCANNER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const BORINGDASHBOARD_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const INIT_CODE_HASH = "0x0bbca9af0511ad1a1da383135cf3a8d2ac620e549ef9f6ae3a4c33c2fed0af91";
export declare const MINIMUM_LIQUIDITY: any;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: any;
    uint256: any;
};
/**
 * Lending SDK
 */
export declare const UNITROLLER_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JOELENS_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JOELENSVIEW_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const FARMLENS_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const JAVAX_ADDRESS: {
    [chainId in ChainId]: string;
};
export declare const MAXIMILLION_ADDRESS: {
    [chainId in ChainId]: string;
};

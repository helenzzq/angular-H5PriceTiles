export class TradeInfo {
    constructor(public currencyPair: string, public direction: string, public dealRate: number, public notional: number, public uuid?: any) { }
}

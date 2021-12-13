export class TradeInfo {
    constructor(public forexPairs: ForexPair[], public notionals: Quantity[], public bidPrice: number, public askPrice: number, public direction: string, public id: string, public remove: boolean){}
}

export class ForexPair {

    constructor(public forexPairName: string){
    }
}

export class Quantity{
    constructor(public notional: number){};
}

export interface price{
    firstFourDigit: string;
    fourthFifthDigit: string;
    lastDigit: string;
    tag: string;
    wholeNum: number;
  }
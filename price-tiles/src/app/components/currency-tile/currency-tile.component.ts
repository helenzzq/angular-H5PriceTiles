import { Component, Input, OnInit } from '@angular/core';
import { DisplayTradeHistoryService, TradeInfoItem } from 'src/app/display-trade-history.service';
import { RandomNumGenerator } from 'src/app/random-num-generator.service';
import { ForexPair, price, Quantity, TradeInfo } from 'src/app/shared/trade-info.model';

// interface currencyPair {
//   name: string;
// }

// interface quantity {
//   value: number;
// }

// use trade-info model to replace!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// export interface price{
//   firstFourDigit: string;
//   fourthFifthDigit: string;
//   lastDigit: string;
//   tag: string;
//   wholeNum: number;
// }

@Component({
  selector: 'currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.css']
})
export class CurrencyTile implements OnInit {

  tradeInfo = <TradeInfoItem>{
    // currencyPair: "",
    // direction: "",
    // dealRate: 0,
    // notional: 0
  };

  forexPairList: ForexPair[] = [
    { forexPairName: 'EUR/USD' },
    { forexPairName: 'EUR/GBP' },
    { forexPairName: 'USD/CAD' },
    { forexPairName: 'USD/JPY' },
    { forexPairName: 'AUD/CAD' },
  ];

  notionals: Quantity[] = [
    { notional: 2000000000 },
    { notional: 100000 }
  ]

  tile: TradeInfo = 
  {
    forexPairs: this.forexPairList, 
    notionals: this.notionals,
    bidPrice: 0, 
    askPrice: 0, 
    direction: "Bid", 
    id: "some id",
    remove: false
  };


  bidPrice!: price;
  askPrice!: price;

  // currencyPairs: currencyPair[] = [
  //   { name: 'EUR/USD' },
  //   { name: 'EUR/GBP' },
  //   { name: 'USD/CAD' },
  //   { name: 'USD/JPY' },
  //   { name: 'AUD/CAD' },
  // ];

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService, private numGeneratorService: RandomNumGenerator) { }

  ngOnInit():void {
    var priceLst = this.numGeneratorService.generateMultipleRandomNum(2, 5);
    this.bidPrice = this.initPrice(priceLst[1]);
    this.askPrice = this.initPrice(priceLst[0]);
    this.askPrice.tag = "Ask";
    console.log(this.bidPrice.tag);
  }

  private initPrice(randomNum: number) {
    var randomPrice = randomNum.toString();
    var intLength = randomPrice.split(".")[0].length;
    var price: price = {
      firstFourDigit: '',
      fourthFifthDigit: '',
      lastDigit: '',
      wholeNum: 0,
      tag: "Bid",
    };

    price.firstFourDigit = randomPrice.substring(0, intLength +3);
    price.fourthFifthDigit = randomPrice.substring(intLength + 3, intLength + 5);
    price.lastDigit = randomPrice.slice(-1);
    price.wholeNum = randomNum;
    return price;
  }

  onDeleteTile() {


  }

}

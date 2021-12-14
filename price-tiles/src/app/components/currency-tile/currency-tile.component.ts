import { Component, Input, OnInit } from '@angular/core';
import { DisplayTradeHistoryService, TradeInfoItem } from 'src/app/display-trade-history.service';
import { RandomNumGenerator } from 'src/app/random-num-generator.service';
import { TradePanelManagerService } from 'src/app/trade-panel-manager.service';

interface currencyPair {
  name: string;
}

interface quantity {
  value: number;
}

export interface price{
  firstFourDigit: string;
  fourthFifthDigit: string;
  lastDigit: string;
  tag: string;
  wholeNum: number;
}

export interface Tile {
  currencyPair: currencyPair;
  notional: quantity;
}

@Component({
  selector: 'currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.css']
})
export class CurrencyTile implements OnInit {
  @Input() uuid?:any;

  tradeInfo = <TradeInfoItem>{
    currencyPair: "",
    direction: "",
    dealRate: 0,
    notional: 0
  };



  bidPrice!: price;
  askPrice!: price;

  currencyPairs: currencyPair[] = [
    { name: 'EUR/USD' },
    { name: 'EUR/GBP' },
    { name: 'USD/CAD' },
    { name: 'USD/JPY' },
    { name: 'AUD/CAD' },
  ];

  quantities: quantity[] = [
    { value: 2000000000 },
    { value: 100000 }

  ]

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService, private numGeneratorService: RandomNumGenerator,private tradePanelManager:
    TradePanelManagerService) { }

  ngOnInit():void {
    var priceLst = this.numGeneratorService.generateMultipleRandomNum(2, 5);
    this.bidPrice = this.initPrice(priceLst[1]);
    this.askPrice = this.initPrice(priceLst[0]);
    this.askPrice.tag = "Ask";
    console.log(this.uuid);
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
    this.tradePanelManager.deleteCurrencyTile(this.uuid)

  }

}

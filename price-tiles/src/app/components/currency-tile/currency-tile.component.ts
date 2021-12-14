import { Component, Input, OnInit } from '@angular/core';
import { TradeInfo } from 'src/app/model/trade-info.model';
import { DisplayTradeHistoryService,   } from 'src/app/services/display-trade-history.service';
import { RandomNumGenerator } from 'src/app/services/random-num-generator.service';
import { TradePanelManagerService } from 'src/app/services/trade-panel-manager.service';

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
  @Input() uuid?: any;
  @Input()
  tradeInfo!: TradeInfo;

  // tradeInfo = < >{
  //   currencyPair: "",
  //   direction: "",
  //   dealRate: 0,
  //   notional: 0
  // };



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

    this.randomGeneratePrice();
    setInterval(() => {         
      this.randomGeneratePrice();
    }, 5000);
  }
  private randomGeneratePrice():void {
    var priceLst = this.numGeneratorService.generateMultipleRandomNum(2, 5);
    this.bidPrice = this.priceSplit(priceLst[1]);
    this.askPrice = this.priceSplit(priceLst[0]);
    this.askPrice.tag = "Ask";
    console.log(this.uuid);
  }
  private priceSplit(randomNum: number) {
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
    this.tradePanelManager.deleteCurrencyTile(this.tradeInfo.uuid)

  }

}

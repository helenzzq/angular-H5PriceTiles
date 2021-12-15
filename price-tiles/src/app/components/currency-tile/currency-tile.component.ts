import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { currencyPair, CURRENCY_PAIRS, QUANTITIES, quantity } from 'src/app/data';
import { TradeInfo } from 'src/app/model/trade-info.model';
import { DisplayTradeHistoryService,   } from 'src/app/services/display-trade-history.service';
import { RandomNumGenerator } from 'src/app/services/random-num-generator.service';
import { TradePanelManagerService } from 'src/app/services/trade-panel-manager.service';


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
  @Input() tradeInfo!: TradeInfo;
  tileForm!: FormGroup;


  bidPrice!: price;
  askPrice!: price;

  currencyPairs: currencyPair[] = CURRENCY_PAIRS;

  quantities: quantity[] = QUANTITIES;


  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService, private numGeneratorService: RandomNumGenerator,private tradePanelManager:
    TradePanelManagerService) { }

  ngOnInit():void {
    this.initPrice();
    this.tileForm = new FormGroup({
      currency_pair_select: new FormControl('', [Validators.required]),
      amount_select: new FormControl('', [Validators.required])
    });
    this.displayTradeHistoryService.tileForm = this.tileForm;
  }

  private initPrice() {
    var priceLst = [0.00000, 0.00000];
    this.bidPrice = this.priceSplit(priceLst[1]);
    this.askPrice = this.priceSplit(priceLst[0]);
    this.askPrice.tag = "Ask";
  }

  private randomGeneratePrice() {
    var priceLst = this.numGeneratorService.generateMultipleRandomNum(2, 5);
    this.bidPrice = this.priceSplit(priceLst[1]);
    this.askPrice = this.priceSplit(priceLst[0]);
    this.askPrice.tag = "Ask";
  }
  

  onInitPriceGen(){
    this.randomGeneratePrice();
    setInterval(() => {
      this.randomGeneratePrice();
    }, 5000);
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


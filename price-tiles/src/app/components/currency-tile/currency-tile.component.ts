import { Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { currencyPair, CURRENCY_PAIRS, QUANTITIES, quantity } from 'src/app/data';
import { Price } from 'src/app/model/price.model';
import { TradeInfo } from 'src/app/model/trade-info.model';
import { DisplayTradeHistoryService,   } from 'src/app/services/display-trade-history.service';
import { PriceGeneratorService } from 'src/app/services/price-generator.service';
import { TradePanelManagerService } from 'src/app/services/trade-panel-manager.service';



@Component({
  selector: 'currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.css']
})
export class CurrencyTile implements OnInit {

  @Input() uuid?: any;
  @Input() tradeInfo!: TradeInfo;
  tileForm!: FormGroup;

  bidPrice = new Price('', '', '','Bid', 0);;
  askPrice= new Price('', '', '','Ask', 0);;
  private prices = [this.askPrice, this.bidPrice];

  currencyPairs: currencyPair[] = CURRENCY_PAIRS;

  quantities: quantity[] = QUANTITIES;


  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService, private priceGeneratorService: PriceGeneratorService,private tradePanelManager:
    TradePanelManagerService) { }

  ngOnInit(): void {
    var priceLst = [0.00000, 0.00000];
    this.priceGeneratorService.initPrice(this.prices, priceLst);
    this.tileForm = new FormGroup({
      currency_pair_select: new FormControl('', [Validators.required]),
      amount_select: new FormControl('', [Validators.required])
    });
    this.displayTradeHistoryService.tileForm = this.tileForm;
  }


  onInitPriceGen(){
    this.priceGeneratorService.randomGeneratePrice(this.prices);
    setInterval(() => {
      this.priceGeneratorService.randomGeneratePrice(this.prices);
    }, 5000);
    console.log(this.bidPrice);
  }



  onDeleteTile() {
    this.tradePanelManager.deleteCurrencyTile(this.tradeInfo.uuid)
  }

}


import { Component, Input, OnInit, Output } from '@angular/core';
import { DisplayTradeHistoryService,   } from 'src/app/services/display-trade-history.service';
import { TradeInfo } from 'src/app/model/trade-info.model';
import { Price } from 'src/app/model/price.model';



@Component({
  selector: 'app-trade-button',
  templateUrl: './trade-button.component.html',
  styleUrls: ['./trade-button.component.css']
})
export class TradeButtonComponent implements OnInit {
  @Input() tradeInfo!: TradeInfo;
  @Input() price!: Price;

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }


  ngOnInit(): void {}

  addTradeEntry() {
    this.tradeInfo.direction = this.price.tag;
    this.tradeInfo.dealRate = this.price.wholeNum;
    var tradeEntry: TradeInfo = {
      direction : this.price.tag,
      dealRate: this.price.wholeNum,
      notional: this.tradeInfo.notional,
      currencyPair:this.tradeInfo.currencyPair

    }
    this.displayTradeHistoryService.addTradeEntry(tradeEntry);
  }

}

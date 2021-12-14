import { Component, Input, OnInit } from '@angular/core';
import { DisplayTradeHistoryService,   } from 'src/app/services/display-trade-history.service';
import { price } from 'src/app/components/currency-tile/currency-tile.component';
import { TradeInfo } from 'src/app/model/trade-info.model';



@Component({
  selector: 'app-trade-button',
  templateUrl: './trade-button.component.html',
  styleUrls: ['./trade-button.component.css']
})
export class TradeButtonComponent implements OnInit {
  @Input() tradeInfo!: TradeInfo;
  @Input() price!: price;

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }


  ngOnInit(): void {
    console.log(this.price.tag);
    
  }

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

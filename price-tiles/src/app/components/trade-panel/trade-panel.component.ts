import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TradeInfoItem } from 'src/app/display-trade-history.service';
import { TradeInfo } from 'src/app/shared/trade-info.model';


@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.css'],
})

  
export class TradePanel implements OnInit {

  defaultTradeInfo: TradeInfo = new TradeInfo('GBP/EUR', 10000, 95, 60);
  tradeInfoList: TradeInfo[] = [this.defaultTradeInfo];


  ngOnInit(): void {}
  
  onAddTrade(trade: TradeInfo) {
    this.tradeInfoList.push(this.defaultTradeInfo);
  }
  onDeleteTrade() {

  }


  @Output() tradeAdded = new EventEmitter<TradeInfo>();
  // onAddTrade(trade: TradeInfo){
  //   this.tradeAdded.emit(trade);
  // }
  // onAddTrade() {}
  // onDeleteTrade(){}

}
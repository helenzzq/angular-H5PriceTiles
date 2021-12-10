import { Component, Input, OnInit } from '@angular/core';
import { DisplayTradeHistoryService, TradeInfoItem } from 'src/app/display-trade-history.service';
import { price } from '../currency-tile.component';



@Component({
  selector: 'app-trade-button',
  templateUrl: './trade-button.component.html',
  styleUrls: ['./trade-button.component.css']
})
export class TradeButtonComponent implements OnInit {
  @Input() tradeInfo!: TradeInfoItem;
  @Input() price!: price;

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }


  ngOnInit(): void {
    console.log(this.price.tag);
    this.tradeInfo.direction = this.price.tag;
  }

  addTradeEntry() {
    this.tradeInfo.dealRate = this.price.wholeNum;
    this.displayTradeHistoryService.addTradeEntry(this.tradeInfo);
    console.log(this.tradeInfo);
  }

}

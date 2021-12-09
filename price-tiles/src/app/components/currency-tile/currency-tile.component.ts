import { Component, Input, OnInit } from '@angular/core';
import { DisplayTradeHistoryService, TradeInfoItem } from 'src/app/display-trade-history.service';

interface currencyPair {
  name: string;
}

interface quantity {
  value: number;
}
@Component({
  selector: 'currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.css']
})



export class CurrencyTile {
  @Input()
  currencyTile!: TradeInfoItem;
  currencyPairs: currencyPair[] = [
    { name: 'EUR/USD' },
    { name: 'EUR/GBP' },
    { name: 'USD/CAD' },
    { name: 'USD/JPY' },
    { name: 'AUD/CAD' },
  ];

  quantities: quantity[] = [
    { value: 2000000000 },
    {value:100000}
  
  ]


  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }

  addTradeEntry() {
    this.displayTradeHistoryService.addTradeEntry(this.currencyTile);
  }



  onAddTrade() {
  }

  onDeleteTrade() {

  }

  onShowTradeDetail() {

  }



}

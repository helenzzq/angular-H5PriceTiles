import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.css']
})
  

  
export class TradePanel implements OnInit {

  currencyPair: string = 'GBP/EUR';
  notional: number = 100000;

  ngOnInit(): void {

  }


}
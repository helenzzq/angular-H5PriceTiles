import { Component, Injectable, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DisplayTradeHistoryService, TradeInfoItem } from "src/app/display-trade-history.service";

@Component({
  selector: 'trade-history',
  templateUrl: './trade-history.component.html',
  styleUrls: ['./trade-history.component.css']
})

export class TradeHistoryComponenet implements OnInit {


  dataSource = new MatTableDataSource();

  headers: string[] = ['Currency Pair', 'Direction', 'Deal Rate', 'Notional'];

  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }
  tradeInfo = <TradeInfoItem>{
    currencyPair: "c",
    direction: "",
    dealRate: 0,
    notional: 0

  };
  ngOnInit(): void {
    this.displayTradeHistoryService.setTradeHistoryComponent(this);
    this.refreshTradeHistory();
    
  }
  

  refreshTradeHistory(): void{
    this.displayTradeHistoryService.tradeHistory$.subscribe((history: TradeInfoItem[]) => {
      this.dataSource.data = history;
    })
  }
}






import { Component, Injectable, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { TradeInfo } from "src/app/model/trade-info.model";
import { DisplayTradeHistoryService,   } from "src/app/services/display-trade-history.service";

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
  tradeInfo = <TradeInfo>{
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
    this.displayTradeHistoryService.tradeHistory$.subscribe((history: TradeInfo []) => {
      this.dataSource.data = history;
    })
  }
}






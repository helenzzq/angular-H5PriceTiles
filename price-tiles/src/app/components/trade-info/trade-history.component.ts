import { Component, OnInit } from "@angular/core";
import { DisplayTradeHistoryService } from "src/app/display-trade-history.service";

@Component({
    selector: 'trade-history',
    templateUrl: './trade-history.component.html',
    styleUrls: ['./trade-history.component.css']
  })
export class TradeHistory implements OnInit {
    ngOnInit(): void {

    }
  constructor(private displayTradeHistoryService:
    DisplayTradeHistoryService) { }
  

  
}
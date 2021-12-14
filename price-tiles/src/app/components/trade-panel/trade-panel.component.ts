import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { TradeInfoItem } from 'src/app/display-trade-history.service';
import { TradeInfo } from 'src/app/shared/trade-info.model';
import { TradePanelManagerService } from 'src/app/trade-panel-manager.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.css'],
})

  
export class TradePanel implements OnInit {


  tradeInfoList?: TradeInfo[];
  isDeleting=false;

  constructor(private tradePanelManager:
    TradePanelManagerService) { }

  ngOnInit(): void {  
    this.tradeInfoList = this.tradePanelManager.tradeInfoList;
    
    this.onAddTile();

  }


  
  onAddTile() {

    this.tradePanelManager.addCurrencyTile();

  }


}
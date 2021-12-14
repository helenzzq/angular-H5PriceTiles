import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { TradeInfo } from 'src/app/model/trade-info.model';
import { TradePanelManagerService } from 'src/app/services/trade-panel-manager.service';

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
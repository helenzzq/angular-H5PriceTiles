import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { TradeInfoItem } from 'src/app/display-trade-history.service';
import { TradeInfo } from 'src/app/shared/trade-info.model';


@Component({
  selector: 'trade-panel',
  templateUrl: './trade-panel.component.html',
  styleUrls: ['./trade-panel.component.css'],
})

  
export class TradePanel implements OnInit {

  tile: TradeInfo=
  {
    forexPairs: new Array(), 
    notionals: new Array(),
    bidPrice: 0, 
    askPrice: 0, 
    direction: "Bid", 
    id: "some id",
    remove: false
  };
  @Input() tradeInfoList: TradeInfo[] = [];


  ngOnInit(): void {}
  
  onAddTrade() {

    this.tradeInfoList.push(this.tile);

  }
  onDeleteTrade(currentTile: TradeInfo) {
    currentTile.remove=true;
    if(this.tradeInfoList.indexOf(currentTile) === 0){
      this.tradeInfoList.splice(0,1);
    }
    else{
      this.tradeInfoList.splice(this.tradeInfoList.indexOf(currentTile)-1,1);
    }
  }
}
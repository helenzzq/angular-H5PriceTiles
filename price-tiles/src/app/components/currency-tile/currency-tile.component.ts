import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'currency-tile',
  templateUrl: './currency-tile.component.html',
  styleUrls: ['./currency-tile.component.css']
})
  

  
export class CurrencyTile implements OnInit {


  allowNewPair = false;


  ngOnInit(): void {

  }
  onChoseCurrencyPair() {
    this.allowNewPair = true;
  }

  onAddTrade() {
  }

  onDeleteTrade() {

  }

  onShowTradeDetail() {

  }



}

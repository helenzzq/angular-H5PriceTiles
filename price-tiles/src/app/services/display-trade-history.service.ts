import { isNgTemplate } from '@angular/compiler';
import { Injectable, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { TradeHistoryComponenet } from '../components/trade-history/trade-history.component';
import { TradeInfo } from '../model/trade-info.model';


@Injectable()
export class DisplayTradeHistoryService {

    tileForm!: FormGroup;
    tradeHistoryComponent!: TradeHistoryComponenet;
    constructor(private popUp: MatSnackBar) { }

    private tradeEntry$ = new Subject<TradeInfo>();
    private _tradeHistory: TradeInfo[] = [];

    tradeHistory$: Observable<TradeInfo[]> = new
        BehaviorSubject<TradeInfo[]>(this._tradeHistory).asObservable();

    addTradeEntry(tradeEntry: TradeInfo) {
        if (tradeEntry.currencyPair == "" || tradeEntry.notional == 0) {
            alert("Please fill in all required fields!")
            this.tileForm.controls["currency_pair_select"].markAsTouched();
            this.tileForm.controls["amount_select"].markAsTouched();
        }
        else {
            this.tradeEntry$.next({ ...tradeEntry, uuid: uuid() })
            this._tradeHistory.push(tradeEntry);
            this.tradeHistoryComponent.refreshTradeHistory();
    
            this.openTradePopUp(tradeEntry)
        }

    }

    setTradeHistoryComponent(component: TradeHistoryComponenet) {
        this.tradeHistoryComponent = component;
    }


    openTradePopUp( tradeEntry: TradeInfo) {
        var message =""
        var message2 = tradeEntry.currencyPair + "@" + tradeEntry.dealRate
        var mySnackBarConfig: MatSnackBarConfig = {
            duration: 10000,
          }



        if (tradeEntry.direction === "Bid") {
            message = "Buy " + tradeEntry.notional +'\n' + message2
            mySnackBarConfig['panelClass'] = ['snackbar', 'green'];
        }
        else {
            message = "Sell " + tradeEntry.notional
            mySnackBarConfig['panelClass'] = ['snackbar', 'red'];
        }
        this.popUp.open(message, "X", mySnackBarConfig);


    }

}
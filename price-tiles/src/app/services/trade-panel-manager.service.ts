import { Injectable, Input } from '@angular/core';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, tap, combineLatest, switchMap, skipWhile, shareReplay, debounceTime, publish, refCount, share } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { TradeInfo } from 'src/app/model/trade-info.model';

@Injectable()
export class TradePanelManagerService{
    tradeInfoList: TradeInfo[] = [];


    addCurrencyTile() {
        var defaultTradeInfo: TradeInfo = new TradeInfo("EUR/GBP", "",0, 0,uuid());


        this.tradeInfoList.push(defaultTradeInfo);
    }

    
    deleteCurrencyTile(uuid:any){
        for(var trade of this.tradeInfoList){
            if(trade.uuid == uuid){
                this.tradeInfoList.splice(this.tradeInfoList.indexOf(trade), 1);
            }
        }

    }
}
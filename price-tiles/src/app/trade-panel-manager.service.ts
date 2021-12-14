import { Injectable, Input } from '@angular/core';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, tap, combineLatest, switchMap, skipWhile, shareReplay, debounceTime, publish, refCount, share } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { TradeHistoryComponenet } from './components/trade-history/trade-history.component';
import { TradeInfo } from 'src/app/shared/trade-info.model';

@Injectable()
export class TradePanelManagerService{
    tradeInfoList: TradeInfo[] = [];


    addCurrencyTile() {
        var defaultTradeInfo: TradeInfo = new TradeInfo('GBP/EUR', 10000, 95, 60,uuid());


        this.tradeInfoList.push(defaultTradeInfo);
    }

    
    deleteCurrencyTile(uuid:any){
        for(var tradeInfo of this.tradeInfoList){
            if(tradeInfo.uuid == uuid){
                this.tradeInfoList.splice(this.tradeInfoList.indexOf(tradeInfo), 1);
            }
        }

    }
}
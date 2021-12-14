import { Injectable, Input } from '@angular/core';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { TradeHistoryComponenet } from '../components/trade-history/trade-history.component';
import { TradeInfo } from '../model/trade-info.model';


@Injectable()
export class DisplayTradeHistoryService{
    
    tradeHistoryComponent!: TradeHistoryComponenet;

    private tradeEntry$ = new Subject<TradeInfo>();
    private _tradeHistory: TradeInfo[] = [];
    
    tradeHistory$: Observable<TradeInfo[]> = new 
    BehaviorSubject<TradeInfo[]>(this._tradeHistory).asObservable();

    addTradeEntry(item: TradeInfo) {
        this.tradeEntry$.next({ ...item, uuid: uuid() })
        this._tradeHistory.push(item);
        this.tradeHistoryComponent.refreshTradeHistory();
    }

    setTradeHistoryComponent(component: TradeHistoryComponenet) {
        this.tradeHistoryComponent = component;
    }
    
}
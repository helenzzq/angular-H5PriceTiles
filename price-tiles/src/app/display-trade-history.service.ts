import { Injectable, Input } from '@angular/core';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, tap, combineLatest, switchMap, skipWhile, shareReplay, debounceTime, publish, refCount, share } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { TradeHistoryComponenet } from './components/trade-history/trade-history.component';

export interface TradeInfoItem{
    currencyPair: string;
    direction: string;
    dealRate: number;
    notional: number;
    uuid?: any;
}


@Injectable()
export class DisplayTradeHistoryService{
    
    tradeHistoryComponent!: TradeHistoryComponenet;

    private tradeEntry$ = new Subject<TradeInfoItem>();
    private _tradeHistory: TradeInfoItem[] = [];
    
    tradeHistory$: Observable<TradeInfoItem[]> = new 
    BehaviorSubject<TradeInfoItem[]>(this._tradeHistory).asObservable();

    addTradeEntry(item: TradeInfoItem) {
        this.tradeEntry$.next({ ...item, uuid: uuid() })
        this._tradeHistory.push(item);
        this.tradeHistoryComponent.refreshTradeHistory();
    }

    setTradeHistoryComponent(component: TradeHistoryComponenet) {
        this.tradeHistoryComponent = component;
    }
    
}
import { Injectable } from '@angular/core';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import { scan, startWith, map, tap, combineLatest, switchMap, skipWhile, shareReplay, debounceTime, publish, refCount, share } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

export interface TradeInfoItem{
    currencyPair: string;
    direction: string;
    dealRate: number;
    notional: number;
    uuid?: any;
}

@Injectable()
export class DisplayTradeHistoryService{
    private tradeEntry$ = new Subject<TradeInfoItem>();

    private get tradeHistory$(): Observable<TradeInfoItem[]> {
        let allTradeEntry = this.tradeEntry$.pipe(
            startWith([]),
            scan((acc, currItem) =>
            Object.assign([], acc, currItem), []));
        return allTradeEntry;
      }
    
    addTradeEntry(item: TradeInfoItem) {
        this.tradeEntry$.next({...item, uuid:uuid()})
    }
    
}
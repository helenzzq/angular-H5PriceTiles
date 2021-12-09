import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components within the application
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';
import { TradeHistory } from './components/trade-info/trade-history.component';
import { DisplayTradeHistoryService } from './display-trade-history.service';

// Angular Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CurrencyTile,
    TradePanel,
    TradeHistory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [DisplayTradeHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

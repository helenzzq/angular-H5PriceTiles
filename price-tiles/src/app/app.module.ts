import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components within the application
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';
import { TradeInfo } from './components/trade-info/trade-info.components';


import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CurrencyTile,
    TradePanel,
    TradeInfo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

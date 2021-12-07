import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components within the application
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';


import {MatSelectModule} from '@angular/material/select';

import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CurrencyTile,
    TradePanel,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

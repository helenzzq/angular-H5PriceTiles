import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components within the application
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';
import { TradeHistoryComponenet } from './components/trade-history/trade-history.component';
import { DisplayTradeHistoryService } from './display-trade-history.service';
import { RandomNumGenerator } from './random-num-generator.service';

// Angular Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { TradeButtonComponent } from './components/currency-tile/trade-button/trade-button.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CurrencyTile,
    TradePanel,
    TradeHistoryComponenet,
    TradeButtonComponent
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
    MatTableModule,
    MatTabsModule
  ],
  providers: [DisplayTradeHistoryService,RandomNumGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }

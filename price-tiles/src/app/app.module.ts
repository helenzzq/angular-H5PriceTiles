import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components within the application
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';
import { TradeHistoryComponenet } from './components/trade-history/trade-history.component';
import { DisplayTradeHistoryService } from './services/display-trade-history.service';
import { RandomNumGenerator } from './services/random-num-generator.service';
import { TradePanelManagerService } from './services/trade-panel-manager.service';
import { TradeButtonComponent } from './components/currency-tile/trade-button/trade-button.component';

// Angular Material Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIcon, MatIconModule} from '@angular/material/icon'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { PriceGeneratorService } from './services/price-generator.service';
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CurrencyTile,
    TradePanel,
    TradeHistoryComponenet,
    TradeButtonComponent,
    
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
    MatTabsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [PriceGeneratorService,DisplayTradeHistoryService,RandomNumGenerator,    TradePanelManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

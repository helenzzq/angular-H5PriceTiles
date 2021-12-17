import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { CurrencyTile } from './components/currency-tile/currency-tile.component';
import { TradeButtonComponent } from './components/currency-tile/trade-button/trade-button.component';
import { TradeHistoryComponenet } from './components/trade-history/trade-history.component';
import { TradePanel } from './components/trade-panel/trade-panel.component';
import { DisplayTradeHistoryService } from './services/display-trade-history.service';
import { PriceGeneratorService } from './services/price-generator.service';
import { RandomNumGenerator } from './services/random-num-generator.service';
import { TradePanelManagerService } from './services/trade-panel-manager.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

      ],
      declarations: [
        AppComponent,
        BannerComponent,
        CurrencyTile,
        TradePanel,
        TradeHistoryComponenet,
        TradeButtonComponent
      ],
      providers: [PriceGeneratorService, DisplayTradeHistoryService, RandomNumGenerator, TradePanelManagerService],
    }).compileComponents();
  });
  
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

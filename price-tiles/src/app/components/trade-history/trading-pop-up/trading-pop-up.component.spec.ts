import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingPopUpComponent } from './trading-pop-up.component';

describe('TradingPopUpComponent', () => {
  let component: TradingPopUpComponent;
  let fixture: ComponentFixture<TradingPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingPopUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePanel } from './trade-panel.component';

describe('TradePanel', () => {
  let component: TradePanel;
  let fixture: ComponentFixture<TradePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradePanel ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

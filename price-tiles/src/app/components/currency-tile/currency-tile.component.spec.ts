import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyTile } from './currency-tile.component';

describe('CurrencyTile', () => {
  let component: CurrencyTile;
  let fixture: ComponentFixture<CurrencyTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyTile ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

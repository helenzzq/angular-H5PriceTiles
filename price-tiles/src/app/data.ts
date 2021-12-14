
export interface currencyPair {
    name: string;
  }
  
 export interface quantity {
    value: number;
  }
  
export const CURRENCY_PAIRS: currencyPair[] = [
    { name: 'EUR/USD' },
    { name: 'EUR/GBP' },
    { name: 'USD/CAD' },
    { name: 'USD/JPY' },
    { name: 'AUD/CAD' },
];
  
export const QUANTITIES: quantity[] = [
    { value: 2000000000 },
    { value: 100000 }

  ]
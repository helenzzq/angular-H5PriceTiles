export class  Price{
    constructor(public firstFourDigit: string,
        public fourthFifthDigit: string,
        public lastDigit: string,
        public tag: string,
        public wholeNum: number) { }
    
        init(randomNum: number) {
            var randomPrice = randomNum.toString();
            randomPrice = randomPrice == "0" ? "0.00000" : randomPrice;
            var intLength = randomPrice.split(".")[0].length;

            this.firstFourDigit = randomPrice.substring(0, intLength + 3);
            this.fourthFifthDigit = randomPrice.substring(intLength + 3, intLength + 5);
            this.lastDigit = randomPrice.slice(-1);
            this.wholeNum = randomNum;

        }
  }
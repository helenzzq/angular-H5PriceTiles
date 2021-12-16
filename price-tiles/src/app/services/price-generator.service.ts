import { Injectable } from "@angular/core";

import { price } from 'src/app/model/price.model';
import { RandomNumGenerator } from "./random-num-generator.service";

@Injectable()
export class PriceGeneratorService {

    constructor(private numGenerator: RandomNumGenerator) { }

    priceSplit(randomNum: number) {
        var randomPrice = randomNum.toString();
        randomPrice = randomPrice == "0" ? "0.00000" : randomPrice;
        var intLength = randomPrice.split(".")[0].length;
        var price: price = {
            firstFourDigit: '',
            fourthFifthDigit: '',
            lastDigit: '',
            wholeNum: 0,
            tag: "Bid",
        };

        price.firstFourDigit = randomPrice.substring(0, intLength + 3);
        price.fourthFifthDigit = randomPrice.substring(intLength + 3, intLength + 5);
        price.lastDigit = randomPrice.slice(-1);
        price.wholeNum = randomNum;

        return price;
    }

    initPrice(priceLst:Array<number>) {
        var resultLst = [];
        for (var price of priceLst) {
            resultLst.push(this.priceSplit(price));
        }

        return resultLst;
        
      }


    randomGeneratePrice() {
        var priceLst = this.numGenerator.generateMultipleRandomNum(2, 5);
        return this.initPrice(priceLst);
        

    }


}
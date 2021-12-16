import { Injectable } from "@angular/core";

import { Price } from 'src/app/model/price.model';
import { RandomNumGenerator } from "./random-num-generator.service";

@Injectable()
export class PriceGeneratorService {

    constructor(private numGenerator: RandomNumGenerator) { }



    initPrice(prices:Array<Price>,priceLst:Array<number>) {
        for (let i in prices) {
            prices[i].init(priceLst[i])
        }
        
      }


    randomGeneratePrice(prices:Array<Price>) {
        var priceLst = this.numGenerator.generateMultipleRandomNum(2, 5);
        
        this.initPrice(prices,priceLst);

    }


}
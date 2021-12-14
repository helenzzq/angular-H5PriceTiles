import { Injectable } from "@angular/core";


@Injectable()
export class RandomNumGenerator{

    
    generateMultipleRandomNum(totalNum:number,decimal:number) :Array<number>{
        var numList = [];
        while (numList.length < totalNum) {
            var num = this.randomNumGenerator(decimal);
            if (numList.includes(num) === false) {
                numList.push(num);
            }
        }
        return numList.sort(function(x,y) { return x-y; });
    }

    // Generate a random number with specified decimal places
    randomNumGenerator(decimal:number) {
        
        var precision = 100000; 
        var decimalDigit = Math.floor(Math.random() * (10 * precision - 1 * precision) + 1 * precision) / (1*precision);
        return Math.floor((Math.random() * 100) + 1) + decimalDigit;
    }

}
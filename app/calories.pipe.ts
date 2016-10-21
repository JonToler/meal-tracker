import {Pipe, PipeTransform} from '@angular/core';
import {Meal} from './meal.model';

@Pipe({
  name: "locations",
  pure: false
})
export class LocationsPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var caloricIntake = info;
    var output: Meal[] = [];
    if(caloricIntake === "decadent") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories === "decadent") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (caloricIntake === "sustainable") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calories === "sustainable")  {
          output.push(input[i]);
        }
      }
      return output;
    } else if (caloricIntake === "weightLoss") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].calories === "weightLoss")  {
            output.push(input[i]);
          }
        }
        return output;
    } else {
      return input;
    }
  }
}

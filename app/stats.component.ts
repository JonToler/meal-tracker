import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'stats',
  template: `
  <div class="row">
    <div class="col-md-4">
      <p>Consumed: {{ childMealList.length }}</p>
    </div>
    <div class="col-md-4 text-center">
      <p>Total Calories: {{ calculateCaloriesTotal(childMealList) }}</p>
    </div>
    <div class="col-md-4 text-right">
      <p>Average Calories: {{ displayCaloriesAverage(childMealList) }}</p>
    </div>
  </div>
  `
})

export class StatsComponent {
  @Input() childMealList: Meal[];

  calculateCaloriesTotal(childMealList: Meal[]) {
    var totalCalories = 0;
    for (var i = 0; i < childMealList.length; i++) {
      totalCalories += parseInt(childMealList[i].calories.toString());
    }
    return totalCalories;
  }

  displayCaloriesAverage(childMealList: Meal[]) {
    var totalCalories = this.calculateCaloriesTotal(childMealList);
    return (totalCalories === 0 ? 0: (totalCalories / childMealList.length).toFixed(0));

  }

}

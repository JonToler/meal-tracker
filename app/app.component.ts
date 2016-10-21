import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My Meal Tracker App</h1>
    <h1>{{name | lowercase}}</h1>

    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Hamburger", "500", "decandent"),
      new Meal("sushi", "high", "sustainable"),
  ];
  name = 'JON';
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}

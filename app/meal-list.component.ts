import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `

  Calories:
  <select (change)="onChangeCalories($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="decadent">Show Decadent</option>
    <option value="sustainable" >Show Sustainable</option>
    <option value="weightLoss" >Show WeightLoss</option>
  </select>


  <div *ngFor="let currentMeal of childMealList | locations:selectedCalories">
    <h3>{{ currentMeal.name }}</h3>
    <h3>{{ currentMeal.details }}</h3>
    <div *ngIf="currentMeal.calories >= 1000">
      <option value="decadent">{{currentMeal.calories}}
      </div>

    <h3>{{ currentMeal.calories }}</h3>
    <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
`
})

export class MealListComponent {
  public selectedCompleteness: string = "notDone";
  public selectedCalories: string = "all";
  public selectedDetails: string = "all";
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
  onChangeDone(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
  }

  onChangeCalories(optionFromMenu) {
    this.selectedCalories = optionFromMenu;
  }

  onChangeDetails(optionFromMenu) {
    this.selectedDetails = optionFromMenu;
  }
}

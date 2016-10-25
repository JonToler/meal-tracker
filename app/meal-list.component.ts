import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  template: `
  <h3>Meal List</h3>
  <select (change)="onFilterChange($event.target.value)" class="form-control">
    <option value="All" selected="selected">Show All</option>
    <option value="Low">Under 500 Calories</option>
    <option value="High">500 Calories or More</option>
  </select>
  <hr>
  <div class="row">
    <div class="col-md-3">
      <p>Name</p>
    </div>
    <div class="col-lg-2">
      <p>Calories</p>
    </div>
    <div class="col-md-6">
      <p>Details</p>
    </div>
    <div class="col-md-1">
      <p>Edit</p>
    </div>
  </div>
  <div *ngFor="let currentMealItem of childMealList | calories:caloriesFilterSetting" class="row">
    <div class="col-md-3">
      <p>{{ currentMealItem.name }}</p>
    </div>
    <div class="col-md-2">
      <p>{{ currentMealItem.calories }}</p>
    </div>
    <div class="col-md-6">
      <p>{{ currentMealItem.details }}</p>
    </div>
    <div class="col-md-1 text-right">
      <button (click)="editButtonClicked(currentMealItem)" class="btn btn-sm">Edit</button>
    </div>
  </div>
  `
})

export class MealListComponent{
  @Input() childMealList: Meal[];
  @Output() clickEditSender = new EventEmitter();

  caloriesFilterSetting: string = "All";

  editButtonClicked(mealItemToEdit: Meal) {
    this.clickEditSender.emit(mealItemToEdit);
  }

  onFilterChange(optionFromMenu) {
    this.caloriesFilterSetting = optionFromMenu;
  }
}

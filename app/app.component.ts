import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal-Tracker</h1>
    <div class="row">
      <div class="col-md-4">
      </div>
      <div class="col-md-8">
        <new-meal  *ngIf="!selectedMealItem"
          (newMealSender)="addMealItem($event)"
        ></new-meal>
        <edit-meal *ngIf="selectedMealItem"
          [selectedMealItem]="selectedMealItem"
          (doneEditMealItemSender)="editMealItemComplete()"
        ></edit-meal>
      </div>
    </div>
    <meal-list *ngIf="allMeals.length > 0"
      [childMealList]="allMeals"
      (clickEditSender)="editMealItem($event)"
    ></meal-list>
    <hr>
    <stats
      [childMealList]="allMeals"
    ></stats>
  </div>
  `
})

export class AppComponent {
  public allMeals: Meal[] = [];

  selectedMealItem: Meal = null;

  addMealItem(newMealItem: Meal) {
    this.allMeals.push(newMealItem);
  }

  editMealItem(mealItemToEdit: Meal) {
    this.selectedMealItem = mealItemToEdit;
  }

  editMealItemComplete() {
    this.selectedMealItem = null;
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal Item</h3>
    <div class="form-group">
      <label>Please enter the new Meal</label>
      <input #newName  class="form-control">
    </div>
    <div class="form-group">
      <label>How many calories? </label>
      <input #newCalories  class="form-control">
    </div>
    <div class="form-group">
      <label>How would you describe the meal?</label>
      <input #newDetails class="form-control">
    </div>
    <button class="btn btn-primary" (click)="
      addClicked(newName.value, newCalories.value, newDetails.value);
      newName.value='';
      newCalories.value='';
      newDetails.value='';
      ">Add</button>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }
}

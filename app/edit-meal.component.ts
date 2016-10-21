import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Meal Name:</label>
        <input #newName>
      </div>

      <div>
        <label>Enter Meal Calories:</label>
        <input #newCalories>
        </div>

      <div>

        <div>
          <label>Enter Meal Details:</label>
          <input #newDetails>
          </div>

        <div>
        <button (click)="editClicked()">Edit</button>
        <button (click)="doneClicked()">done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  editClicked() {
    this.doneClickedSender.emit();
  }
  doneClicked() {
    this.childSelectedMeal.markDone();
  }
}

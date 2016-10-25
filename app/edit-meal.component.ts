import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <h3>Edit a meal's information</h3>
    <div class="form-group">
      <label>Edit name:</label>
      <input [(ngModel)]="selectedMealItem.name" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit calories:</label>
      <input [(ngModel)]="selectedMealItem.calories" class="form-control">
    </div>
    <div class="form-group">
      <label>Edit details:</label>
      <input [(ngModel)]="selectedMealItem.details" class="form-control">
    </div>
    <div>
      <button (click)="doneClicked()" class="btn btn-success">Done!</button>
    </div>
  `
})

export class EditMealComponent {
  @Input() selectedMealItem: Meal;
  @Output() doneEditMealItemSender = new EventEmitter();
  doneClicked() {
    this.doneEditMealItemSender.emit();
  }
}

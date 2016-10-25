import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { NewMealComponent } from './new-meal.component';
import { MealListComponent }   from './meal-list.component';
import { EditMealComponent } from './edit-meal.component';
import { StatsComponent }   from './stats.component';
import { CaloriesPipe } from './calories.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NewMealComponent,
    MealListComponent,
    EditMealComponent,
    StatsComponent,
    CaloriesPipe,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

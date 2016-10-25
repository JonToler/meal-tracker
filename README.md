Meal-Tracker with Angular2 - JS Week 2 Code Review
By:Jon Toler
Description

As a user…

I want to log a food I have eaten by submitting a form with food name, calories and details.
I want to view a list of foods I have logged.
I want options to view all foods, only high-calorie foods (more than 500 calories), or only lower-calorie foods (less than 500 calories).
I want to click a food to edit its name, details or calories (in case I decide to pretend my fries were 100 calories instead of 365).


specs:

If a user adds a meal to the list it will populate the list:
ex: input: Waffles, calories 500, Good
output: list Waffles.

User can sort list by calories in food.
ex input user: show meals with 500 calories or less.
output: will display list of meals less than 500 calories.

user can edit a meal item to change it.
ex user input: change waffles to 200 calories.
output: waffles will not be 200 calories.

Installation

Install Meal Tracker locally by cloning this repository:

https://jontoler.github.io/meal-tracker/

After cloning, initialize and install the Node and Bower packages by running $npm init, $npm install, $bower init, and $bower install in the terminal. Make sure gulp and typescript are installed globally. Run $gulp build and $gulp serve when installation is complete to run the project in your local server.
Technologies Used

    Angular2
    Javascript
    Node.js with the Node Package Manager
    Bower
    Gulp
    HTML
    CSS with Sass
    Markdown
    Git, gitHub
    Atom

Copyright (c)

Copyright 2016 Jon Toler.

This software is licensed under the MIT license.

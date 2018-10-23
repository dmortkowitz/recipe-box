import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
// import { $ } from 'protractor';
declare var jquery:any; declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe box!';
  recipes: Recipe[] = [
    new Recipe("Pancake", "Eggs, Flour, Salt, Baking powder, Milk, Butter", "1. Foo 2. Bar 3. Hello 4. World"),
    new Recipe("Peanut butter and jelly", "Bread, Peanutbutter, Jelly", "1. Spread peanut butter on bread 2. Put Jelly on 3. Eat it"),
    new Recipe("Bowl of Ice Cream", "Bowl, Ice Cream", "1. Put Ice Cream in Bowl 2. Eat"),
  ];
  toggleDetails(recipe:Recipe) {
    $(`.details-${recipe.id}`).toggle();
  }
  public selectedRecipe: Recipe = null;
  editRecipe(recipe:Recipe) {
    // $(".inputHide").toggle();
    this.selectedRecipe = recipe;
  }
  finishedEditing() {
    this.selectedRecipe = null;
  }
}



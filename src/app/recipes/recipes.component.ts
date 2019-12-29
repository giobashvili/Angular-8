import { Component, OnInit } from '@angular/core';
import {RecipeModel} from './recipe.mode';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

 selectedRecipe: RecipeModel;

  ngOnInit() {
  }
}

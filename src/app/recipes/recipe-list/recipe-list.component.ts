import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.mode';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: RecipeModel [] = [
    new RecipeModel('chqapuli', 'gemrieli', "https://www.mshoblebi.ge/pictures/image3/fabe9409b4d4cf73c3bf5a265f4342c3.jpg"),

    new RecipeModel('chqapuli', 'gemrieli', "https://www.mshoblebi.ge/pictures/image3/fabe9409b4d4cf73c3bf5a265f4342c3.jpg")
  ]

  constructor() { }

  ngOnInit() {
  }

}

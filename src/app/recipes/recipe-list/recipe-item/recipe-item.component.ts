import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../../recipe.mode';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipe: RecipeModel [] = [
    new RecipeModel('chqapuli', 'gemrieli', "https://www.mshoblebi.ge/pictures/image3/fabe9409b4d4cf73c3bf5a265f4342c3.jpg"),

    new RecipeModel('chqapuli', 'gemrieli', "https://www.mshoblebi.ge/pictures/image3/fabe9409b4d4cf73c3bf5a265f4342c3.jpg")
  ]

  constructor() { }

  ngOnInit() {
  }

}

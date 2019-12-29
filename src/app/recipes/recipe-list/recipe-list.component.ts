import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { RecipeModel } from '../recipe.mode';
import {stringify} from 'querystring';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipe: RecipeModel [] = [
    new RecipeModel('ჩაქაფული', 'გემრიელი', 'https://www.mshoblebi.ge/pictures/image3/fabe9409b4d4cf73c3bf5a265f4342c3.jpg'),

    // tslint:disable-next-line:max-line-length
    new RecipeModel('ხინკალი', 'უფრო გემრიელი', 'http://firstnews.ge/media/k2/items/cache/aeb492336c5690bbeb3eb42716b6c50b_XL.jpg')
  ];




  onRecipeSelected(itemEl: RecipeModel) {
this.recipeWasSelected.emit(itemEl);
  }


  constructor() { }

  ngOnInit() {
  }

}

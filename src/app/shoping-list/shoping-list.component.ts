import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('apples', 5),
    new Ingredients('tomato', 32)

  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
  }

}

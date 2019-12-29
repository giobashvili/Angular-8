import {Component, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.mode';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipe: RecipeModel
  constructor() { }

  ngOnInit() {
  }

}

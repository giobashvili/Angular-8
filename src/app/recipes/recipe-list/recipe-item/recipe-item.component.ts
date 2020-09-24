import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { RecipeModel} from '../../recipe.mode';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item = RecipeModel;
  @Output() recipeSelected = new EventEmitter<number>();

  onSelected() {
    this.recipeSelected.emit();
  }



  constructor() { }

ngOnInit() {
  }

}

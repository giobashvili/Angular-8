import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import { Ingredients } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor() { }

  ngOnInit() {
  }
  onAdditem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredients(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }












}

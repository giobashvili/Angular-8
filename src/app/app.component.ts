import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFature = 'recpe';
  onNavigate(feature:string){
    this.loadedFature = feature;
  }
}

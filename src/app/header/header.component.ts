import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {stringify} from 'querystring';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() transport = new EventEmitter<string>();
  onSelect(feature: string) {
    this.transport.emit(feature);
  }
constructor() { }

ngOnInit() {
  }

}





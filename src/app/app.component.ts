import { Component } from '@angular/core';
import { Iplayer } from './modals/players';
import { cricketers } from './const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
playersArr:Array<Iplayer>=cricketers;
serchVal!:string;
searchField!:string;

onSearchFieldChange() {
  this.serchVal = ''; 
}
}

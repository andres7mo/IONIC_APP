import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  usuarios: any= [];
  constructor( ) {}
  ngOnInit(): void {
    Storage.set({key: 'usuarios', value: JSON.stringify([])});
  }
}

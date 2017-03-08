import { Component, OnInit } from '@angular/core';
const NAV_ITEMS = [
  {title:'Personal Info', url:'info', icon:'user'},
  {title:'Hotel Review', url:'reviews', icon:'header'},
  {title:'Logout', url:'login', icon:'off'}
];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: any[];
  constructor() { }

  ngOnInit() {
    this.items = NAV_ITEMS;
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() searchText = new EventEmitter<String>();
  
  constructor() { }

  ngOnInit(): void {
  }

  setSearch(val: String){
    this.searchText.emit(val);
  }

}

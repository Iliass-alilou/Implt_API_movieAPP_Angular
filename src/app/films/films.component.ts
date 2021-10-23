
import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../Models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @Input() films :any;

  constructor() { 
   
  }


  showDetailsFilm (film:Film){
    alert("title :"+ film.title + " description : " + film.overview);
  }


  ngOnInit(): void {
    
  }

}

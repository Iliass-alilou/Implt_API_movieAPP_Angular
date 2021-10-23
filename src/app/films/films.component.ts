import { FilmService } from './../services/film.service';
import { Component, OnInit } from '@angular/core';
import { film } from '../Models/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  
  constructor(private filmService:FilmService) { 
    this.filmService.getAllFilms(1).then((response:any)=>console.log(response));
  }



  films =[
    

  ]

  showDetailsFilm (film:film){
    alert("title :"+ film.title + " description : " + film.overview);
  }


  ngOnInit(): void {
    
  }

}

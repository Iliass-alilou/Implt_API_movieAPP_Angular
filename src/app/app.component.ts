import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Film } from './Models/film';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesApp';

  filmsSubscreption : Subscription;

  searchedText:String = "";
  films:Array<Film> = [];
  number_pages = 0;
  filmService:FilmService;

  constructor(private service:FilmService){
    this.filmService=service;
    this.filmService.getAllFilms(1)
    this.filmsSubscreption = this.filmService.filmsSubject.subscribe(response=>{
      this.films = response["results"];
      this.number_pages=response["total_pages"]
      
    })

       // .then(response=>{
    //   this.films = response["results"];
    //   this.number_pages=response["total_pages"]
      
    // })
  }

  searchText(searchedText:String){
   //alert("hi from search film");
   this.filmService.getFilms(searchedText,1).subscribe(response=>{
     console.log(response["results"]);
     this.films = response["results"];
   })
  
  }
}

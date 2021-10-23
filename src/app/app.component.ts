import { Component } from '@angular/core';
import { Film } from './Models/film';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MoviesApp';

  searchedText:String = "";
  films:Array<Film> = [];
  filmService:FilmService;

  constructor(private service:FilmService){
    this.filmService=service;
    this.filmService.getAllFilms(1)
    .then(rsp=>{
      this.films = rsp["results"];
    })
  }

  // searchText(searchedText){
  //   this.filmService.getFilms(searchedText,1).then(rsp=>{
  //     this.films = rsp["results"];
  //   })
  // }
}

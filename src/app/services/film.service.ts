import { Film } from './../Models/film';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) { }

  API_TOKEN:any = "5b4da682ac740e8d87f1d175c93df7db";

  getAllFilms(page:number){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN  + "&page=" + page
    return this.http.get(url).toPromise()
           .then((response:any) => response)
           .catch((error)=> console.log(error));    
  }

  getFilms(text:String,page:number){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.API_TOKEN +'&language=fr&query=' + text + "&page=" + page
    return this.http.get<Array<Film>>(url).toPromise()
        .then((response:any)=>response)
        .catch((err)=>console.log(err));
  }

  getImage(name:String){
    return 'https://image.tmdb.org/t/p/w300' +name;
  }

}

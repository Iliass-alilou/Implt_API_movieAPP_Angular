import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  constructor(private rout: ActivatedRoute , public service:FilmService) { }

  filmDetail : any;

  getFilmImage(pathImage:String){
    
    this.service.getImage(pathImage)
    console.log(this.service.getImage(pathImage))
  }
  
  ngOnInit(): void {

    this.rout.paramMap.subscribe(res=>{
      const idFilm = res.get("id");
      this.service.getDetailFilm(idFilm).subscribe(data=>{
        this.filmDetail = data;
      });
    })
  }

}

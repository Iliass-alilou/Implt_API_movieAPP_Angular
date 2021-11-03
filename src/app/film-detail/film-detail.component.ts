import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  constructor(private rout: ActivatedRoute ,private service:FilmService) { }

  filmDetail : any;
  
  ngOnInit(): void {

    this.rout.paramMap.subscribe(res=>{
      const idFilm = res.get("id");
      this.service.getDetailFilm(idFilm).subscribe(data=>{
        this.filmDetail = data;
      });
    })
  }

}

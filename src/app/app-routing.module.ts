import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriesComponent } from './favories/favories.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsComponent } from './films/films.component';

const routes : Routes = [
  {path : 'films', component:FilmsComponent},
  {path : 'DetailFilm/:id', component:FilmDetailComponent},
  {path : 'favouris', component:FavoriesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

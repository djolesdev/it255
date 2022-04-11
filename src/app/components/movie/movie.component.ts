import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from 'src/app/Movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})

export class MovieComponent implements OnInit {

  id: string = '';
  movie: Movie = {
    _id: '',
    titleOriginal: '',
    description: '',
    rating: '',
    image: '',
  };
  responce: any = {}

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramsId) => {
      this.id = paramsId.id;
    });


    this.movieService.getMovie(this.id).subscribe((movie) => {
      this.responce = movie
      this.movie = this.responce.result
    })
    
  }
}

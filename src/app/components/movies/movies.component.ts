import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  movies: Movie[] = []

  responce: any = {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((movies) => {
      this.responce = movies;

      this.movies = this.responce.results
      console.log(this.responce.results)
    });

    
  }


}

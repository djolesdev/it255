import { Injectable } from '@angular/core';
import { Movie } from '../Movie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  // movies: Movie[] = [];
  // movie: Movie = {
  //   id: '',
  //   title: '',
  //   desc: '',
  //   rating: '',
  //   image: '',
  // };

  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'x-rapidapi-host': 'movies-app1.p.rapidapi.com',
    'x-rapidapi-key': '7c10718a9fmsh7800e57ee71c13fp11df06jsnbf299b9792ed',
  });

  getAllMovies(): Observable<Movie[]> {
    return this.http.get<any>(
      'https://movies-app1.p.rapidapi.com/api/movies?limit=16',
      {
        headers: this.headers,
      }
    );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http.get<any>(
      `https://movies-app1.p.rapidapi.com/api/movie/${id}`,
      {
        headers: this.headers,
      }
    );
  }
}

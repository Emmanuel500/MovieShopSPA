import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Pagination } from 'src/app/shared/models/moviePagenation';

@Component({
  selector: 'app-movie-genres',
  templateUrl: './movie-genres.component.html',
  styleUrls: ['./movie-genres.component.css']
})
export class MovieGenresComponent implements OnInit {

  genreId: number = 0;
  pageNumber: number = 1;
  pagination!: Pagination;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      q => {
        this.pageNumber = Number(q['pageNumber']);
        this.activatedRoute.paramMap.subscribe(
          p => {
            this.genreId = Number(p.get('genreId'));
            this.movieService.getAllMoviesOfGenrePagenation(this.genreId, this.pageNumber).subscribe(
              m => {
                this.pagination = m;
                console.log(this.pagination);
              }
            );
          }
        );
      }
    );
  }
}

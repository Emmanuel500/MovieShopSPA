import { Component, Input, OnInit } from '@angular/core';
import { MovieCard } from '../../models/moviecard';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  // sharing/communication data between parent and child-components 

  @Input() movieCard!: MovieCard;
  constructor() { }

  ngOnInit(): void {
  }

}

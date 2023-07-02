import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private service: MovieApiServiceService

  ) { }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  MovieResult: any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  sciencefictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  //quede adding the data of the function

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.actionMovie()
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;

    });


  }



  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;

    });
  }

  actionMovie() {
    this.service.fetchActionMovies().subscribe((resutl) => {
      this.actionMovieResult = resutl.results;
    });
  }

  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((resutl) => {
      this.adventureMovieResult = resutl.results;
    })
  }
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((resutl) => {
      this.animationMovieResult = resutl.results;
    })
  }
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((resutl) => {
      this.comedyMovieResult = resutl.results;
    })
  }
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((resutl) => {
      this.documentaryMovieResult = resutl.results;
    })
  }
  scienceFictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((resutl) => {
      this.sciencefictionMovieResult = resutl.results;
    })
  }
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((resutl) => {
      this.thrillerMovieResult = resutl.results;
    })
  }
}

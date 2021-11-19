import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  novedades: any[] = [];

  constructor(
    private spotifyService: SpotifyService
  ) {
    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.novedades = data ;
    });
  }

  ngOnInit(): void {
  }

}

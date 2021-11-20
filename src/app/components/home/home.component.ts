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
  loading: boolean = true;

  constructor(
    private spotifyService: SpotifyService
  ) {
    // para manejar la vista del loading
    this.loading = true;

    this.spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.novedades = data ;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent {

  loading: boolean = true;
  artista: any = {};
  tracks: any[] = [];

  constructor(
    private acrRoute: ActivatedRoute,
    private spotify: SpotifyService
  ) {
    this.loading = true;

    this.acrRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;

    this.spotify.getArtista(id).subscribe(res => {
      console.log(res);
      this.artista = res;

      this.loading = false;
    })
  }

  getTopTracks(id: string) {
    this.loading = true;
    this.spotify.getTopTracks(id).subscribe(res => {
      console.log(res);
      this.tracks = res;

      this.loading = false;
    })
  }
}

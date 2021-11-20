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

  constructor(
    private acrRoute: ActivatedRoute,
    private spotyfy: SpotifyService
  ) {
    this.loading = true;

    this.acrRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    });
  }

  getArtista(id: string) {
    this.loading = true;

    this.spotyfy.getArtista(id).subscribe(res => {
      console.log(res);
      this.artista = res;
      
      this.loading = false;
    })
  }
}

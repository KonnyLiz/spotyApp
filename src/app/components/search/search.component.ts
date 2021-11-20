import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  loading: boolean = false;

  artistas: any[] = [];

  constructor(
    private spotify: SpotifyService
  ) { }

  ngOnInit(): void {
  }

  buscar(txt: string) {
    this.loading = true;
    this.spotify.searchArtista(txt)
      .subscribe((data : any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      })
  }

}

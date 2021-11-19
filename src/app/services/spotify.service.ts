import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDPASXpy3xSEUiEmZnVuP9fCItg0soolylAwqmgZgp4DAWsBM7WP9q8FzFFc9rd2megoOtIisMqIPzA7vK88AEeNA56PbLo15wx_nrvOqoome2dWWWRIXzoq6b4iPh6JbqjDgs-c88X55NHt_ERpvpBsZk34Ag'
    });

    // el operador map sirve para filtrar la data que traigamos y que quede solo lo que nos interesa
    // el pipe es para transformar la vista de la data

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe(map((data: any) => {
        return data['albums'].items;
      }));
  }

  searchArtista(txt: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDPASXpy3xSEUiEmZnVuP9fCItg0soolylAwqmgZgp4DAWsBM7WP9q8FzFFc9rd2megoOtIisMqIPzA7vK88AEeNA56PbLo15wx_nrvOqoome2dWWWRIXzoq6b4iPh6JbqjDgs-c88X55NHt_ERpvpBsZk34Ag'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?query=${txt}&type=artist&offset=0&limit=20`, { headers })
      .pipe(map((data: any) => {
        return data['artists'].items;
      }));
  }
}

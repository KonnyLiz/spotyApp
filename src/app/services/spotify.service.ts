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

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAmOjsbBP7u_npML_fyJJx8Nxki47Cr0lsZd0OYKFQExkBGcGckTTqVR1JPgO-f0DPHDAbx-2skaKVz3_iUb7s2j0jDaDw3v2PqQk9OB1Q3JNNdrEDnmj3yzZ29nBqDyD0FjSQ3Jac4jqmVrrilXc2stfpeviM'
    });

    return this.httpClient.get(URL, { headers });
  }

  getNewReleases() {
    // el operador map sirve para filtrar la data que traigamos y que quede solo lo que nos interesa
    // el pipe es para transformar la vista de la data

    // forma corta del map funcion flecha
    return this.getQuery('browse/new-releases').pipe(map((data: any) => data['albums'].items));
  }

  searchArtista(txt: string) {
    return this.getQuery(`search?query=${txt}&type=artist&offset=0&limit=20`).pipe(map((data: any) => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
      .pipe(map((data: any) => data['tracks']));
  }
}

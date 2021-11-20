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
      'Authorization': 'Bearer BQAgWO1OGr2qKdew8KoCtHK_mYE_2bDrj0hlJJbrI1dp_MA4e9fcQCZiaOQRZptw2q_xRUXzCk6rKfT8CcZ-Oa8bL88bxCjFcAp4T8dOoKSMgcRScbHUkknYDlokbehPyVXFjdRwjPolYpkG9Hj_aIqT7mwNAnI'
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
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDA6Av8zL_zXYYsOciJGY2ABcE9QEJBSjQpZVU4PEYp9Ij_hsCQkbkrSst2bTPlrSZOTh5eNrDnx66NE1Sf1FJMzOj83TrIwCTt0yH7wJj8eFEHusqFOiXS-qyn1Hr_bVEM4nidhJasvMaWttu2bkWLiVhsyTU'
    });

    return this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  searchArtista(txt: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDA6Av8zL_zXYYsOciJGY2ABcE9QEJBSjQpZVU4PEYp9Ij_hsCQkbkrSst2bTPlrSZOTh5eNrDnx66NE1Sf1FJMzOj83TrIwCTt0yH7wJj8eFEHusqFOiXS-qyn1Hr_bVEM4nidhJasvMaWttu2bkWLiVhsyTU'
    });

    return this.httpClient.get(`https://api.spotify.com/v1/search?query=${txt}&type=artist&offset=0&limit=20`, { headers });
  }
}

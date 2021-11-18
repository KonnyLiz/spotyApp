import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNewreleases() {
  const headers = new HttpHeaders({
    'Authorization': 'Bearer BQCpCWIdSSOdeWpAWmt3aal1-bm0pXw5hq-oSUGn4z7gIIkQZkliSkX1QeSH0qxaxJOYn315o0uwDaFHAwvPdFXdXukBwOoS_IkrSDPxJZoG2xdGw_S59WnUnHOpVfZJJElazT4LnDyba3_-UtCa1a3JleQvl6M'
  });

    this.httpClient.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe(data => {
      console.log(data);
    });
  }
}

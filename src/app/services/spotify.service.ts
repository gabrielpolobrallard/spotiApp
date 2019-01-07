import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  categories: any[];
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAa0e_1UNt-_5WfdFjZm4jyuMGcXjaN8Z6Y0Q7k1AEhS1S2KSpaWpsEe7YgaT_iw7vro3qmCeTZeOxeIeA`'
    });

    return this.http.get(url, {
      headers
    });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items)
    );
  }

  searchArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist`).pipe(
      map((data: any) => data.artists.items)
    );
  }
}

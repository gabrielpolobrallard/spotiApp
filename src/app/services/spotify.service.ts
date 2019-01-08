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
    const TOKEN =
      'BQCJZkk-k5OyFoNpk22FF3gFrMUalbttWoVfnn4bN-lCPf3-Ud-SrTlOMTqNXoRjoYN70e541n53ys6UajI';
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + TOKEN
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

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getAlbumsByArtist(id: string) {
    return this.getQuery(`artists/${id}/albums`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(
      map((data: any) => {
        return data.tracks;
      })
    );
  }
}

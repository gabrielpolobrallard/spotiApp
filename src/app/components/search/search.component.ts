import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  loading: boolean;
  artists: any = [];
  constructor(private spotifyService: SpotifyService) {}
  searchArtists(searchTerm: string) {
    if (searchTerm === '') {
      this.loading = false;
    } else {
      this.loading = true;
      this.spotifyService.searchArtist(searchTerm).subscribe((data: any) => {
        this.artists = data;
        this.loading = false;
      });
    }
  }

  ngOnInit() {}
}

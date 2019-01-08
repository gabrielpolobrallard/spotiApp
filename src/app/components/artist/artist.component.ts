import { SpotifyService } from 'src/app/services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  albums: any = {};
  artistId: string;
  loading: boolean;
  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe(art => {
      this.artist = art;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id).subscribe(topTracks => {
      this.albums = topTracks;
      console.log(this.albums);
    });
  }
  ngOnInit() {}
}

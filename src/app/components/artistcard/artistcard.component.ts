import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.css']
})
export class ArtistcardComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit() {}

  getArtist(item: any) {
    let artistId;

    if (item.type === 'artist') {
      artistId = item.id;
    } else {
      artistId = item.artists[0].id;
    }
    this.router.navigate(['/artist', artistId]);
  }
}

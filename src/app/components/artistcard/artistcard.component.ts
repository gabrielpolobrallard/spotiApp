import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artistcard',
  templateUrl: './artistcard.component.html',
  styleUrls: ['./artistcard.component.css']
})
export class ArtistcardComponent implements OnInit {
  @Input() items: any[] = [];
  constructor() {}

  ngOnInit() {}
}

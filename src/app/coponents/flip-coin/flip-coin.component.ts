import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flip-coin',
  templateUrl: './flip-coin.component.html',
  styleUrls: ['./flip-coin.component.scss']
})
export class FlipCoinComponent implements OnInit {

  @Input() player = 'player1';

  constructor() { }

  ngOnInit() {
  }

}

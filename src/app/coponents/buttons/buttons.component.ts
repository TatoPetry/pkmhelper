import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalService } from 'src/app/components/global.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() player = 'player1';
  @Output() clickBtn = new EventEmitter();

  buttons = [10, 50, 100, 0];

  constructor(public gs: GlobalService) { }

  ngOnInit() {
  }

  click(value) {
    if (value) {
    this.gs.playerLife[this.player] += value;
    } else {
      this.gs.playerLife[this.player] = 0;
    }
  }

}

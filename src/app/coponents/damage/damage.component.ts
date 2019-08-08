import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from 'src/app/components/global.service';

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.scss']
})
export class DamageComponent implements OnInit {
  
  @Input() player = 'player1';

  constructor(public gs: GlobalService) { }

  ngOnInit() {
  }

}

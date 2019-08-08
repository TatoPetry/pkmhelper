import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public playerLife = {
    player1: 0,
    player2: 1
  };

  constructor() { }
}

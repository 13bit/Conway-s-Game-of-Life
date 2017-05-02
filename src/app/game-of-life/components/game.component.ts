import {Component, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../models/Game';
@Component({
  selector: 'game',
  templateUrl: 'game.component.html'
})

export class GameComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.game = this.gameService.initGame();
  }

  start() {

  }
}

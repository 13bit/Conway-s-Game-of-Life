import {Component, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../models/Game';
import {SceneService} from '../services/scene.service';
@Component({
  selector: 'game',
  templateUrl: 'game.component.html'
})

export class GameComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService,
              private sceneService: SceneService) {
  }

  ngOnInit(): void {
    this.game = this.gameService.initGame();
  }

  start() {

  }

  nextStep() {
    this.game = this.gameService.nextStep(this.game);
  }

  // getPoint(point) {
  //   console.log('Point', point);
  //   const neighbors = this.sceneService.getCellNeighbors(this.game.scene, point);
  //   console.log('Neigbors', neighbors);
  //   console.log(this.sceneService.getCellNextCondition(point, neighbors));
  // }

  getPoint(point) {
    console.log('Point', point);
    point.condition = !point.condition;
    // const neighbors = this.sceneService.getCellNeighbors(this.game.scene, point);
    // console.log('Neigbors', neighbors);
    // console.log(this.sceneService.getCellNextCondition(point, neighbors));
  }
}

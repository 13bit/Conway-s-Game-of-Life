import {Component, OnInit} from '@angular/core';
import {GameService} from '../services/game.service';
import {Game} from '../models/Game';
import {SceneService} from '../services/scene.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

@Component({
  selector: 'game',
  templateUrl: 'game.component.html'
})

export class GameComponent implements OnInit {
  game: Game;
  speed: number = 1;
  timerSubscription;

  constructor(private gameService: GameService,
              private sceneService: SceneService) {
  }

  ngOnInit(): void {
    this.game = this.gameService.initGame();
  }

  incrementSpeed(): void {
    this.speed++;
  }

  decrementSpeed(): void {
    (this.speed > 1) ? this.speed-- : '';

  }

  start() {
    const timer$ = Observable.timer(1000, 1000 / this.speed);
     this.timerSubscription = timer$.subscribe(() => this.game = this.gameService.nextStep(this.game));
  }

  pause() {
    this.timerSubscription.unsubscribe();
  }

  stop() {
    this.timerSubscription.unsubscribe();
    this.game = this.gameService.initGame();
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

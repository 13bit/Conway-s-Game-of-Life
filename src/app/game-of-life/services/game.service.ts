import {Injectable} from '@angular/core';
import {Game} from '../models/Game';
import {SceneService} from './scene.service';
import {GameCell} from '../models/GameCell';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';

@Injectable()
export class GameService {
  public game$: BehaviorSubject<Game> = new BehaviorSubject<Game>(null);

  constructor(private sceneService: SceneService) {
  }

  initGame(): Game {
    const game = new Game();

    const cells = [
      new GameCell(1, 1, true),
      new GameCell(2, 1, true),
      new GameCell(2, 2, true),
      new GameCell(3, 3, true),

      new GameCell(0, 0, true),
      new GameCell(0, 1, true),
      new GameCell(5, 5, true),
      new GameCell(5, 6, true),
      new GameCell(6, 5, true),
      new GameCell(7, 6, true),
      new GameCell(6, 4, true),
      new GameCell(7, 4, true),
      new GameCell(7, 3, true)
    ];


    game.scene = this.sceneService.initScene(20, 20, cells);

    return game;
  }

  setGame(game: Game): void {
    this.game$.next(game);
  }

  nextStep(game: Game): Game {
    //  count behavior of cells
    game.scene.prevGrid = _.cloneDeep(game.scene.grid);

    for (let i = 0; i < game.scene.height; i++) {
      const row = game.scene.grid[i];

      for (let j = 0; j < game.scene.width; j++) {
        let cell = row.cells[j] as GameCell;
        const neighbors = this.sceneService.getCellNeighbors(game.scene, cell);

        cell = this.sceneService.getCellNextCondition(cell, neighbors);
      }
    }

    game.step += 1;

    return game;
  }


}

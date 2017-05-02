import {Injectable} from '@angular/core';
import {Game} from '../models/Game';
import {SceneService} from './scene.service';
import {GameCell} from '../models/GameCell';

@Injectable()
export class GameService {
  constructor(private sceneService: SceneService) {
  }

  initGame(): Game {
    const game = new Game();

    const cells = [
      new GameCell(0, 0, true),
      new GameCell(0, 1, true),
      new GameCell(5, 5, true),
      new GameCell(7, 3, true)
    ];

    game.scene = this.sceneService.initScene(20, 20, cells);

    return game;
  }


}

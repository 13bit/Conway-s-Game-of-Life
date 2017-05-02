import {Injectable} from '@angular/core';
import {Game} from '../models/Game';
import {SceneService} from './scene.service';

@Injectable()
export class GameService {
  constructor(private sceneService: SceneService) {
  }

  initGame(): Game {
    const game = new Game();
    game.scene = this.sceneService.initScene(20, 20);
    return game;
  }


}

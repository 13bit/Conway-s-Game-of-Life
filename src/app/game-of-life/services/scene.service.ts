import {Injectable} from '@angular/core';
import {Scene} from '../models/Scene';
import {GameCell} from '../models/GameCell';
import {Row} from '../models/Row';

@Injectable()
export class SceneService {
  constructor() {
  }

  public initScene(width: number, height: number, cells: GameCell[] = []): Scene {
    let scene = new Scene();
    scene.width = width;
    scene.height = height;

    scene = this.addGrid(scene);

    if (cells.length) {
      scene = this.addPointToGrid(scene, cells);
    }

    return scene;
  }

  protected addGrid(scene: Scene): Scene {
    for (let i = 0; i < scene.width; i++) {

      let row = new Row();

      for (let j = 0; j < scene.height; j++) {
        row.cells.push(new GameCell(i, j, false));
      }

      scene.grid.push(row);
    }

    return scene;
  }

  protected addPointToGrid(scene: Scene, points: GameCell[]): Scene {
    points.forEach(point => {
      if (scene.grid[point.x] && scene.grid[point.x].cells[point.y]) {
        scene.grid[point.x].cells[point.y]['condition'] = point.condition;
      }
    });

    return scene;
  }

}

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
    for (let i = 0; i < scene.height; i++) {

      let row = new Row();

      for (let j = 0; j < scene.width; j++) {
        row.cells.push(new GameCell(j, i, false));
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
  //TODO @@@dr I think game logic should be incapsulated to GameOfLife class
  getCellNeighbors(scene: Scene, cell: GameCell) {
    const neighbors = [];
    let startY = cell.y + 1;

    for (let i = 0; i < 3; i++) {
      let startX = cell.x - 1;

      for (let j = 0; j < 3; j++) {

        //TODO @@@dr rethink it
        if ((startX < 0 || startY < 0) || (startX >= scene.width || startY >= scene.height)) {
          startX += 1;
          continue;
        } else if (startY === cell.y && startX === cell.x) {
          startX += 1;
          continue;
        } else {
          neighbors.push(scene.prevGrid[startY].cells[startX]);
          startX += 1;

        }
      }
      startY -= 1;
    }

    return neighbors;
  }

  getCellNextCondition(cell: GameCell, neighbors: GameCell[]): GameCell {
    const aliveNeighbors = neighbors.filter((neighbor) => neighbor.condition === true);

    if (cell.condition === true) {
      if (aliveNeighbors.length === 0 || aliveNeighbors.length === 1 || aliveNeighbors.length >= 4) {
        cell.condition = false;
      }
    } else {
      if (aliveNeighbors.length === 3) {
        cell.condition = true;
      }
    }

    return cell;
  }


}

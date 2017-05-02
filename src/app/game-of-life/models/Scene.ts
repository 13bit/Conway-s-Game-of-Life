import {Row} from './Row';

export class Scene {
  private _width: number;
  private _height: number;
  private _stepNumber?: number;
  private _grid: Row[] = [];


  get width(): number {
    return this._width;
  }

  set width(value: number) {
    this._width = value;
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    this._height = value;
  }

  get stepNumber(): number {
    return this._stepNumber;
  }

  set stepNumber(value: number) {
    this._stepNumber = value;
  }

  get grid(): Row[] {
    return this._grid;
  }

  set grid(value: Row[]) {
    this._grid = value;
  }
}

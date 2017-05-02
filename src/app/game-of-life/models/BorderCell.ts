import {Cell} from './Cell';

export class BorderCell extends Cell {
  private _color: string;

  constructor(x: number, y: number, color: string) {
    super(x, y);
    this.color = color;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }
}

import {Cell} from './Cell';

export class Row {
  private _cells: Cell[] = [];

  get cells(): Cell[] {
    return this._cells;
  }

  set cells(value: Cell[]) {
    this._cells = value;
  }
}

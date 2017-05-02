import {Cell} from './Cell';

export class GameCell extends Cell {
  private _condition: boolean;

  constructor(x: number, y: number, condition: boolean){
    super(x, y);
    this.condition = condition;
  }

  get condition(): boolean {
    return this._condition;
  }

  set condition(value: boolean) {
    this._condition = value;
  }
}

import { PiezaBase } from "./PiezaBase";

export class PiezaL extends PiezaBase {
  constructor() {
    super();
    this.nombre = "L";
    this._forma = [
      "X.",
      "X.",
      "XX"
    ];
  }
}
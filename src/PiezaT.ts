import { PiezaBase } from "./PiezaBase";

export class PiezaT extends PiezaBase {
  constructor() {
    super();
    this.nombre = "T";
    this._forma = [
      ".X.",
      "XXX"
    ];
  }
}
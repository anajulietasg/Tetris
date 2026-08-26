import { PiezaBase } from "./PiezaBase";

export class PiezaPalo extends PiezaBase {
  constructor() {
    super();
    this.nombre = "Palo";
    this._forma = [
      "X",
      "X",
      "X",
      "X"
    ];
  }
}
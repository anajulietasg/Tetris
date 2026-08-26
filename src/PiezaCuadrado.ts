import { PiezaBase } from "./PiezaBase";

export class PiezaCuadrado extends PiezaBase {
  constructor() {
    super();
    this.nombre = "Cuadrado";
    this._forma = [
      "XX",
      "XX"
    ];
  }
}
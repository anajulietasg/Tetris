import { PiezaBase } from "./PiezaBase";

export class PiezaPerro extends PiezaBase {
  constructor() {
    super();
    this.nombre = "Perro";
    this._forma = [
      ".XX",
      "XX."
    ];
  }
}
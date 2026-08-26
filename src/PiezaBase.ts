import { IRotator } from "./IRotator";

export abstract class PiezaBase 
       implements IRotator {
  private _nombre: string = "";

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  rotateLeft(): void {
    // cada pieza definirá su rotación
  }

  rotateRight(): void {
    // cada pieza definirá su rotación
  }
}
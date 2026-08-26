import { IRotator } from "./IRotator";

export abstract class PiezaBase implements IRotator {
  private _nombre: string = "";
  protected _forma: string[] = [];  //protected es privado pero las clases que heredan sí lo pueden tocar, _forma es una lista de strings

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

 get forma(): string[] {
    return this._forma;
  }

  rotateLeft(): void {
    //cada pieza rota a su manera
  }

  rotateRight(): void {
    //cada pieza rota a su manera
  }
}
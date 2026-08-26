import { IRotator } from "./IRotator";

export abstract class PiezaBase 
        implements IRotator {
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

  rotateRight(): void {
    const filas = this._forma.length;          	//cuenta cuántas filas y columnas tiene la pieza
    const columnas = this._forma[0].length;
    const nuevaForma: string[] = [];

    for (let c = 0; c < columnas; c++) {
      let nuevaFila = "";
      for (let f = filas - 1; f >= 0; f--) {
        nuevaFila += this._forma[f][c];       //agarra el carácter de la fila f, columna c
      }
      nuevaForma.push(nuevaFila);            //construye la pieza girada, carácter por carácter
    }

    this._forma = nuevaForma;               //reemplaza la forma vieja por la rotada
  }

  rotateLeft(): void {
    const filas = this._forma.length;
    const columnas = this._forma[0].length;
    const nuevaForma: string[] = [];

    for (let c = columnas - 1; c >= 0; c--) {
      let nuevaFila = "";
      for (let f = 0; f < filas; f++) {
        nuevaFila += this._forma[f][c];
      }
      nuevaForma.push(nuevaFila);
    }

    this._forma = nuevaForma;
  }
}
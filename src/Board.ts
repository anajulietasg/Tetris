import { PiezaBase } from "./PiezaBase";

export class Board {
  private _ancho: number = 10;
  private _alto: number = 20;
  private _grilla: string[] = [];    //lista de strings, arranca vacía

  constructor() {                    //se ejecuta automáticamente cuando creamos un tablero
    this.inicializar();
  }

  private inicializar(): void {
  this._grilla = Array.from(             //armar una lista
    { length: this._alto },              //que tenga 20 elementos
    () => ".".repeat(this._ancho)       //cada elemento que sea una fila de 10 puntos
   );
  }
  
  entra(pieza: PiezaBase, filaInicio: number, columnaInicio: number): boolean {
    const forma = pieza.forma;
    let cabe = true;

    for (let f = 0; f < forma.length; f++) {
      for (let c = 0; c < forma[f].length; c++) {
        const filaTablero = filaInicio + f;
        const columnaTablero = columnaInicio + c;

        const esBloque = forma[f][c] === "X";
        const seSale =
          filaTablero >= this._alto ||
          columnaTablero < 0 ||
          columnaTablero >= this._ancho;

        if (esBloque && seSale) {            //si es un bloque Y se sale
          cabe = false;
        }
      }
    }

    return cabe;
  }

  colocarPieza(pieza: PiezaBase, filaInicio: number, columnaInicio: number): void {   //recibe una pieza y dónde ponerla (fila y columna de arranque)
    const forma = pieza.forma;

    for (let f = 0; f < forma.length; f++) {          //los for recorren la forma de la pieza carácter por carácter
      for (let c = 0; c < forma[f].length; c++) {
        if (forma[f][c] === "X") {                         //solo dibuja donde la pieza tiene bloque (una X), no donde tiene punto
          const filaTablero = filaInicio + f;              //Calcula en qué fila del tablero va cada bloque de la pieza
          const columnaTablero = columnaInicio + c;
          this._grilla[filaTablero] = this.reemplazarCaracter(
            this._grilla[filaTablero],
            columnaTablero,
            "X"
          );
        }
      }
    }
  }

  private reemplazarCaracter(fila: string, posicion: number, caracter: string): string {
    return fila.substring(0, posicion) + caracter + fila.substring(posicion + 1);
  }

  get ancho(): number {
    return this._ancho;
  }

  get alto(): number {
    return this._alto;
  }

  get grilla(): string[] {
    return this._grilla;
  }
}
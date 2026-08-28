import { PiezaBase } from "./PiezaBase";

export class Board {
  private _ancho: number = 10;
  private _alto: number = 20;
  private _grilla: string[] = [];

  constructor() {
    this.inicializar();
  }

  private inicializar(): void {
    this._grilla = [];
    for (let fila = 0; fila < this._alto; fila++) {
      this._grilla.push(".".repeat(this._ancho));
    }
  }

  colocarPieza(pieza: PiezaBase, filaInicio: number, columnaInicio: number): void {
    const forma = pieza.forma;

    for (let f = 0; f < forma.length; f++) {
      for (let c = 0; c < forma[f].length; c++) {
        if (forma[f][c] === "X") {
          const filaTablero = filaInicio + f;
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
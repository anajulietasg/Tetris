import { PiezaBase } from "./PiezaBase";

export class Board {
  private _ancho: number = 10;
  private _alto: number = 20;
  private _grilla: string[] = [];    //lista de strings, arranca vacía

  private _piezaActual: PiezaBase | null = null;   //la pieza que está cayendo ahora
  private _filaActual: number = 0;                 //en qué fila está parada
  private _columnaActual: number = 0;               //en qué columna está parada

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
    this.dibujarPieza(pieza, filaInicio, columnaInicio, "X");
  }

  //agrega la pieza al tablero Y la marca como "pieza actual" (la que está cayendo)
  agregarPiezaActual(pieza: PiezaBase, filaInicio: number, columnaInicio: number): boolean {
    if (!this.entra(pieza, filaInicio, columnaInicio)) {
      return false;                          //no entra, no se agrega (Requerimiento 3.2 y 4)
    }

    this.colocarPieza(pieza, filaInicio, columnaInicio);
    this._piezaActual = pieza;
    this._filaActual = filaInicio;
    this._columnaActual = columnaInicio;
    return true;
  }

  //mueve la pieza actual una fila hacia abajo, solo si entra en la nueva posición
  moverAbajo(): boolean {
    if (!this._piezaActual) {
      return false;                          //no hay pieza actual, no hay nada que mover
    }

    const filaNueva = this._filaActual + 1;

    if (!this.entra(this._piezaActual, filaNueva, this._columnaActual)) {
      return false;                          //no cabe una fila más abajo, se queda donde está
    }

    this.borrarPieza(this._piezaActual, this._filaActual, this._columnaActual);
    this.colocarPieza(this._piezaActual, filaNueva, this._columnaActual);
    this._filaActual = filaNueva;
    return true;
  }

  //borra los bloques de una pieza de la grilla (los vuelve a poner en ".")
  private borrarPieza(pieza: PiezaBase, filaInicio: number, columnaInicio: number): void {
    this.dibujarPieza(pieza, filaInicio, columnaInicio, ".");
  }

  //dibuja el carácter indicado ("X" para colocar, "." para borrar) en cada bloque de la pieza
  private dibujarPieza(
    pieza: PiezaBase,
    filaInicio: number,
    columnaInicio: number,
    caracter: string
  ): void {
    const forma = pieza.forma;

    for (let f = 0; f < forma.length; f++) {
      for (let c = 0; c < forma[f].length; c++) {
        if (forma[f][c] === "X") {                         //solo dibuja donde la pieza tiene bloque
          const filaTablero = filaInicio + f;
          const columnaTablero = columnaInicio + c;
          this._grilla[filaTablero] = this.reemplazarCaracter(
            this._grilla[filaTablero],
            columnaTablero,
            caracter
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

  get piezaActual(): PiezaBase | null {
    return this._piezaActual;
  }

  get filaActual(): number {
    return this._filaActual;
  }

  get columnaActual(): number {
    return this._columnaActual;
  }
}
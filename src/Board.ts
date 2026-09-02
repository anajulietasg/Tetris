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
        const estaOcupado =
          !seSale && this._grilla[filaTablero][columnaTablero] === "X";

        if (esBloque && (seSale || estaOcupado)) {            //si es un bloque Y se sale O está ocupado
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
      return false;                          //no entra, no se agrega 
    }

    this.colocarPieza(pieza, filaInicio, columnaInicio);
    this._piezaActual = pieza;
    this._filaActual = filaInicio;
    this._columnaActual = columnaInicio;
    return true;
  }
  //la pieza actual queda fija en el tablero
  fijarPieza(): void {
    this._piezaActual = null;    //ya no hay pieza cayendo
  }

  //mueve la pieza actual una fila hacia abajo, solo si entra en la nueva posición
  moverAbajo(): boolean {
    if (!this._piezaActual) {
      return false;                          //no hay pieza actual
    }
    this.borrarPieza(this._piezaActual, this._filaActual, this._columnaActual);
    const filaNueva = this._filaActual + 1;      //baja
    const puedeBajar = this.entra(this._piezaActual, filaNueva, this._columnaActual);

    const filaFinal = puedeBajar ? filaNueva : this._filaActual;     //si puedeBajar, entonces filaNueva, si no, filaActual

    this.colocarPieza(this._piezaActual, filaFinal, this._columnaActual);
    this._filaActual = filaFinal;

    return puedeBajar;

  }

  //borra los bloques de una pieza de la grilla (los vuelve a poner en ".")
  private borrarPieza(pieza: PiezaBase, filaInicio: number, columnaInicio: number): void {
    this.dibujarPieza(pieza, filaInicio, columnaInicio, ".");
  }

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
  //elimina las filas que están completas (sin ningún punto) y baja el resto
  eliminarLineasCompletas(): number {
    const filasQueQuedan = this._grilla.filter((fila) => fila.includes("."));  

    const eliminadas = this._alto - filasQueQuedan.length; //cuántas filas se eliminaron

    const filasVacias = Array.from(             //arma nuevas filas 
      { length: eliminadas },
      () => ".".repeat(this._ancho)
    );
    this._grilla = [...filasVacias, ...filasQueQuedan];
    return eliminadas;                           //num lineas eliminadas
  }

  private reemplazarCaracter(fila: string, posicion: number, caracter: string): string {
    return fila.substring(0, posicion) + caracter + fila.substring(posicion + 1);
  }

  //agrega una pieza rotándola al azar y en una columna al azar, sin salirse
  agregarPiezaAleatoria(pieza: PiezaBase): boolean {
    //rota la pieza una cantidad de veces al azar (0-3)
    const vueltas = Math.floor(Math.random() * 4);
    for (let v = 0; v < vueltas; v++) {
      pieza.rotateRight();
    }

    const anchoPieza = Math.max(...pieza.forma.map((fila) => fila.length));         //calcula el ancho de la pieza ya rotada y ve que no se salga
    const columnaMaxima = this._ancho - anchoPieza;

    const columna = Math.floor(Math.random() * (columnaMaxima + 1));       ////elige una columna al azar

    return this.agregarPiezaActual(pieza, 0, columna);
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
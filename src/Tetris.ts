import { Board } from "./Board";
import { Clock } from "./Clock";
import { PiezaBase } from "./PiezaBase";
import { PiezaT } from "./PiezaT";
import { PiezaCuadrado } from "./PiezaCuadrado";
import { PiezaPalo } from "./PiezaPalo";
import { PiezaL } from "./PiezaL";
import { PiezaPerro } from "./PiezaPerro";

export class Tetris {
  private _board: Board = new Board();      //el tablero del juego
  private _clock: Clock = new Clock();      //el reloj
  private _terminado: boolean = false;      //si el juego terminó o no

  //empieza el juego metiendo la primera pieza
  start(): void {
    this.nuevaPieza();
  }

  //mete una pieza nueva al azar. Si no entra, el juego termina
  private nuevaPieza(): void {
    const pieza = this.piezaAleatoria();
    const sePudo = this._board.agregarPiezaActual(pieza, 0, 4);

    if (!sePudo) {
      this._terminado = true;    //si no entra la pieza nueva, se acabó el juego
    }
  }

  //devuelve una pieza cualquiera de las cinco, al azar
  private piezaAleatoria(): PiezaBase {
    const piezas = [
      new PiezaT(),
      new PiezaCuadrado(),
      new PiezaPalo(),
      new PiezaL(),
      new PiezaPerro()
    ];
    const indice = Math.floor(Math.random() * piezas.length);
    return piezas[indice];
  }

  //un tic del reloj: baja la pieza actual una fila
  tick(): void {
    if (this._terminado) {
      return;                    //si terminó, no hace nada
    }

    this._clock.tick();          //avanza el reloj
    this._board.moverAbajo();    //baja la pieza actual (método de tu compañera)
  }

  //getters para leer el estado desde afuera y para los tests
  get terminado(): boolean {
    return this._terminado;
  }

  get board(): Board {
    return this._board;
  }
}
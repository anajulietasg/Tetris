import { Board } from "./Board";
import { Clock } from "./Clock";
import { PiezaBase } from "./PiezaBase";
import { PiezaT } from "./PiezaT";
import { PiezaCuadrado } from "./PiezaCuadrado";
import { PiezaPalo } from "./PiezaPalo";
import { PiezaL } from "./PiezaL";
import { PiezaPerro } from "./PiezaPerro";

export class Tetris {
  private _lineasEliminadas: number = 0;
  private _gano: boolean = false;
  private _lineasParaGanar: number = 5;
  private _board: Board = new Board();      //el tablero del juego
  private _clock: Clock = new Clock();      //el reloj
  private _terminado: boolean = false;      //si el juego terminó o no

  //mete la primera pieza
  start(): void {
    this.nuevaPieza();
  }

  //mete una pieza nueva al azar. Si no entra, termina
  private nuevaPieza(): void {
    const pieza = this.piezaAleatoria();
    const sePudo = this._board.agregarPiezaAleatoria(pieza);    //columna aleatoria

    if (!sePudo) {
      this._terminado = true;    //si no entra la pieza nueva, termina
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
  //en cada tick baja la pieza, si no puede la fija y trae una nueva
  tick(): void {
    if (this._terminado) {
      return;                        //terminó
    }
    this._clock.tick();

    const pudoBajar = this._board.moverAbajo();   //intenta bajar la pieza

    if (!pudoBajar) {
      this._board.fijarPieza();             //la pieza tocó fondo, queda fija
      const eliminadas = this._board.eliminarLineasCompletas(); //revisa si se completó alguna linea
      this._lineasEliminadas += eliminadas;
      if (this._lineasEliminadas >= this._lineasParaGanar) {
        this._gano = true;
        this._terminado = true;    
      } else {
        this.nuevaPieza();         //trae nueva pieza 
      }
    }
  }

  get terminado(): boolean {
    return this._terminado;
  }

  get board(): Board {
    return this._board;
  }

    get gano(): boolean {
    return this._gano;
  }

  get lineasEliminadas(): number {
    return this._lineasEliminadas;
  }
}
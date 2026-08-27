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
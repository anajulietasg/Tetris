export class Clock {
  private _tics: number = 0;

  tick(): void {
    this._tics++;
  }

  get tics(): number {
    return this._tics;
  }
}
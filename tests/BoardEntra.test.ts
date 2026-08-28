import { describe, expect, test } from "vitest";
import { Board } from "../src/Board";
import { PiezaT } from "../src/PiezaT";

describe("Board entra pieza", () => {
  test("la pieza T entra en el medio del tablero", () => {
    const board = new Board();
    const pieza = new PiezaT();
    expect(board.entra(pieza, 0, 3)).toBe(true);
  });

  test("la pieza T no entra si se pasa por la derecha", () => {
    const board = new Board();
    const pieza = new PiezaT();
    expect(board.entra(pieza, 0, 9)).toBe(false);
  });

  test("la pieza T no entra si se pasa por abajo", () => {
    const board = new Board();
    const pieza = new PiezaT();
    expect(board.entra(pieza, 19, 0)).toBe(false);
  });
});
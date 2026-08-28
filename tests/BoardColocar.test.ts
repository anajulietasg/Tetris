import { describe, expect, test } from "vitest";
import { Board } from "../src/Board";
import { PiezaT } from "../src/PiezaT";

describe("Board colocar pieza", () => {
  test("coloca la pieza T en la esquina de arriba", () => {
    const board = new Board();
    const pieza = new PiezaT();
    board.colocarPieza(pieza, 0, 0);

    expect(board.grilla[0]).toBe(".X........");
    expect(board.grilla[1]).toBe("XXX.......");
  });

  test("coloca la pieza T más a la derecha", () => {
    const board = new Board();
    const pieza = new PiezaT();
    board.colocarPieza(pieza, 0, 3);

    expect(board.grilla[0]).toBe("....X.....");
    expect(board.grilla[1]).toBe("...XXX....");
  });
});
import { describe, expect, test } from "vitest";
import { Board } from "../src/Board";

describe("Board", () => {
  test("se puede crear un tablero", () => {
    const board = new Board();
    expect(board).not.toBeNull();
  });

  test("el tablero tiene 10 de ancho y 20 de alto", () => {
    const board = new Board();
    expect(board.ancho).toBe(10);
    expect(board.alto).toBe(20);
  });

  test("el tablero arranca con 20 filas", () => {
    const board = new Board();
    expect(board.grilla.length).toBe(20);
  });

  test("cada fila del tablero tiene 10 columnas", () => {
    const board = new Board();
    expect(board.grilla[0].length).toBe(10);
  });

  test("el tablero arranca vacío", () => {
    const board = new Board();
    expect(board.grilla[0]).toBe("..........");
  });
});
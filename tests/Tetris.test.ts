import { describe, expect, test } from "vitest";
import { Tetris } from "../src/Tetris";

describe("Tetris", () => {
  test("se puede crear un tetris", () => {
    const tetris = new Tetris();
    expect(tetris).not.toBeNull();
  });

  test("al empezar, el juego no está terminado", () => {
    const tetris = new Tetris();
    tetris.start();
    expect(tetris.terminado).toBe(false);
  });

  test("el tablero del tetris tiene 20 filas", () => {
    const tetris = new Tetris();
    expect(tetris.board.grilla.length).toBe(20);
  });

  test("se puede hacer un tick sin que se rompa", () => {
    const tetris = new Tetris();
    tetris.start();
    tetris.tick();
    expect(tetris.terminado).toBe(false);
  });
});
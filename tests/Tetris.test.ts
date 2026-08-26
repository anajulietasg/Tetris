
import { describe, expect, test } from "vitest";
import { Tetris } from "../src/Tetris";

describe("Tetris", () => {
  test("se puede crear un tetris", () => {
    const tetris = new Tetris(); //Crear instancia de clase (objeto) Tetris
    expect(tetris).not.toBeNull(); //Verifica que exista, no sea Null
  });
});
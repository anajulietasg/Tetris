import { describe, expect, test } from "vitest";
import { Tetris } from "../src/Tetris";
import { Board } from "../src/Board"; 

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
  
    test("el juego termina cuando se llena el tablero", () => {
    const tetris = new Tetris();
    tetris.start();

    for (let i = 0; i < 500; i++) {
      tetris.tick();
    }

    expect(tetris.terminado).toBe(true);              //después de tantos ticks, comprueba que se haya terminado el juego
  });

  test ("el juego no termina si se eliminan menos de 5 lineas", () => {
    const tetris = new Tetris();
    tetris.start();
    for (let i = 0; i < 4; i++) {
      tetris.board.grilla[19] = "X".repeat(10);   //llena la última
      tetris.tick();
    }
    expect (tetris.gano).toBe(false);
  });

  test("arranca con cero líneas eliminadas y sin ganar", () => {
    const tetris = new Tetris();
    tetris.start();

    expect(tetris.lineasEliminadas).toBe(0);   //arranca en cero
    expect(tetris.gano).toBe(false);           //sin ganar todavía
  });

  test("no gana si no se completó ninguna línea", () => {
    const tetris = new Tetris();
    tetris.start();

    tetris.tick();   //tick sin completar ninguna línea

    expect(tetris.gano).toBe(false);   //no gana
  });
});
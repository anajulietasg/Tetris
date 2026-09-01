import { describe, expect, test } from "vitest";
import { Board } from "../src/Board";
import { PiezaCuadrado } from "../src/PiezaCuadrado";

describe("Board - mover pieza actual", () => {
  test("la pieza actual baja una fila si puede", () => {
    const board = new Board();
    const pieza = new PiezaCuadrado();

    board.agregarPiezaActual(pieza, 0, 4);
    const semovio = board.moverAbajo();

    expect(semovio).toBe(true);
    expect(board.filaActual).toBe(1);
  });

  test("la pieza actual no se mueve si ya está en el fondo del tablero", () => {
    const board = new Board();
    const pieza = new PiezaCuadrado();

    // se coloca pegada al fondo (asumiendo pieza de 2 filas de alto)
    board.agregarPiezaActual(pieza, board.alto - 2, 4);
    const semovio = board.moverAbajo();

    expect(semovio).toBe(false);
    expect(board.filaActual).toBe(board.alto - 2); // no cambió de lugar
  });

  test("si no hay pieza actual, moverAbajo no rompe nada y devuelve false", () => {
    const board = new Board();
    const semovio = board.moverAbajo();

    expect(semovio).toBe(false);
  });

  test("agregarPiezaActual devuelve false si la pieza no entra", () => {
    const board = new Board();
    const pieza = new PiezaCuadrado();

    const entro = board.agregarPiezaActual(pieza, 0, board.ancho); // fuera de rango
    expect(entro).toBe(false);
  });
});
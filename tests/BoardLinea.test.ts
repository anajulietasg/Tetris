import { describe, expect, test, vi } from "vitest";
import { Board } from "../src/Board";
import { PiezaCuadrado } from "../src/PiezaCuadrado";

describe("Board eliminar líneas", () => {
  test("elimina una línea completa y baja el resto", () => {
    const board = new Board();

    board.grilla[19] = "X".repeat(10);          //completo la última fila con bloques

    board.eliminarLineasCompletas();

    expect(board.grilla[19]).toBe("..........");    //la última fila debe estar vacía
    expect(board.grilla.length).toBe(20);           //el tablero sigue teniendo 20 filas
  });

  test("si no hay líneas completas, el tablero no cambia", () => {
    const board = new Board();
    board.grilla[19] = "XXXX......";   //fila incompleta con puntos

    board.eliminarLineasCompletas();

    expect(board.grilla[19]).toBe("XXXX......");   
  });
});

describe("Board pieza aleatoria", () => {
  test("agrega la pieza en una columna válida controlando el azar", () => {
    const board = new Board();
    const pieza = new PiezaCuadrado();

    vi.spyOn(Math, "random").mockReturnValue(0);        //mockeo Math.random para que devuelva siempre 0 
    board.agregarPiezaAleatoria(pieza);

    expect(board.grilla[0]).toBe("XX........");             //con random en 0: 0 rotaciones y columna 0
    expect(board.grilla[1]).toBe("XX........");

    vi.restoreAllMocks();   //devuelvo Math.random a la normalidad
  });
});
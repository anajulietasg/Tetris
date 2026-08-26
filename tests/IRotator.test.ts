import { describe, expect, test } from "vitest";
import { PiezaT } from "../src/PiezaT";

describe("Rotación", () => {
  test("la pieza T rota bien a la derecha", () => {
    const pieza = new PiezaT();
    pieza.rotateRight();
    expect(pieza.forma).toEqual([
      "X.",
      "XX",
      "X."
    ]);
  });

  test("la pieza T rota bien a la izquierda", () => {
    const pieza = new PiezaT();
    pieza.rotateLeft();
    expect(pieza.forma).toEqual([
      ".X",
      "XX",
      ".X"
    ]);
  });

  test("la pieza T vuelve a su forma original al rotar 4 veces a la derecha", () => {
    const pieza = new PiezaT();
    pieza.rotateRight();
    pieza.rotateRight();
    pieza.rotateRight();
    pieza.rotateRight();
    expect(pieza.forma).toEqual([
      ".X.",
      "XXX"
    ]);
  });
});
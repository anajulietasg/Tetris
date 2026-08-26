import { describe, expect, test } from "vitest";
import { PiezaCuadrado } from "../src/PiezaCuadrado";

describe("PiezaCuadrado", () => {
  test("se puede crear el cuadrado", () => {
    const pieza = new PiezaCuadrado();
    expect(pieza).not.toBeNull();
  });

  test("el cuadrado tiene el nombre correcto", () => {
    const pieza = new PiezaCuadrado();
    expect(pieza.nombre).toBe("Cuadrado");
  });

  test("el cuadrado tiene la forma correcta", () => {
    const pieza = new PiezaCuadrado();
    expect(pieza.forma).toEqual([
      "XX",
      "XX"
    ]);
  });
});
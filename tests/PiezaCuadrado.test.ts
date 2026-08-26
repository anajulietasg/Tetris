
import { describe, expect, test } from "vitest";
import { PiezaCuadrado } from "../src/PiezaCuadrado";

describe("PiezaCuadrado", () => {
  test("se puede crear el cuadrado con su nombre", () => {
    const pieza = new PiezaCuadrado();
    expect(pieza.nombre).toBe("Cuadrado");
  });
});
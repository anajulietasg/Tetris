import { describe, expect, test } from "vitest";
import { PiezaPalo } from "../src/PiezaPalo";

describe("PiezaPalo", () => {
  test("se puede crear el palo", () => {
    const pieza = new PiezaPalo();
    expect(pieza).not.toBeNull();
  });

  test("el palo tiene el nombre correcto", () => {
    const pieza = new PiezaPalo();
    expect(pieza.nombre).toBe("Palo");
  });

  test("el palo tiene la forma correcta", () => {
    const pieza = new PiezaPalo();
    expect(pieza.forma).toEqual([
      "X",
      "X",
      "X",
      "X"
    ]);
  });
});
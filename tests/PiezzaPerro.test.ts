import { describe, expect, test } from "vitest";
import { PiezaPerro } from "../src/PiezaPerro";

describe("PiezaPerro", () => {
  test("se puede crear el perro", () => {
    const pieza = new PiezaPerro();
    expect(pieza).not.toBeNull();
  });

  test("el perro tiene el nombre correcto", () => {
    const pieza = new PiezaPerro();
    expect(pieza.nombre).toBe("Perro");
  });

  test("el perro tiene la forma correcta", () => {
    const pieza = new PiezaPerro();
    expect(pieza.forma).toEqual([
      ".XX",
      "XX."
    ]);
  });
});
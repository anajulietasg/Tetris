
import { describe, expect, test } from "vitest";
import { PiezaBase } from "../src/PiezaBase";

describe("PiezaBase", () => {
  test("se puede crear una pieza base", () => {
    const pieza = new PiezaBase();
    expect(pieza).not.toBeNull();
  });

  test("se le puede asignar un nombre", () => {
    const pieza = new PiezaBase();
    pieza.nombre = "Base";
    expect(pieza.nombre).toBe("Base");
  });
});
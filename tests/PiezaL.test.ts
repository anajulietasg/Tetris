import { describe, expect, test } from "vitest";
import { PiezaL } from "../src/PiezaL";

describe("PiezaL", () => {
  test("se puede crear la L", () => {
    const pieza = new PiezaL();
    expect(pieza).not.toBeNull();
  });

  test("la L tiene el nombre correcto", () => {
    const pieza = new PiezaL();
    expect(pieza.nombre).toBe("L");
  });

  test("la L tiene la forma correcta", () => {
    const pieza = new PiezaL();
    expect(pieza.forma).toEqual([
      "X.",
      "X.",
      "XX"
    ]);
  });
});
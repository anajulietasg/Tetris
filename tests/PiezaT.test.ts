import { describe, expect, test } from "vitest";
import { PiezaT } from "../src/PiezaT";

describe("PiezaT", () => {
  test("se puede crear una pieza T", () => {
    const pieza = new PiezaT();
    expect(pieza).not.toBeNull();
  });

  test("la pieza T tiene el nombre correcto", () => {
    const pieza = new PiezaT();
    expect(pieza.nombre).toBe("T");
  });

  test("la pieza T tiene la forma correcta", () => {
    const pieza = new PiezaT();
    expect(pieza.forma).toEqual([
      ".X.",
      "XXX"
    ]);
  });
});
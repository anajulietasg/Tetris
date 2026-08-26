
import { describe, expect, test } from "vitest";
import { PiezaPerro } from "../src/PiezaPerro";

describe("PiezaPerro", () => {
  test("se puede crear el perro con su nombre", () => {
    const pieza = new PiezaPerro();
    expect(pieza.nombre).toBe("Perro");
  });
});
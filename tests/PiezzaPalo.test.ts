
import { describe, expect, test } from "vitest";
import { PiezaPalo } from "../src/PiezaPalo";

describe("PiezaPalo", () => {
  test("se puede crear el palo con su nombre", () => {
    const pieza = new PiezaPalo();
    expect(pieza.nombre).toBe("Palo");
  });
});

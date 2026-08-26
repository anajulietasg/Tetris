
import { describe, expect, test } from "vitest";
import { PiezaL } from "../src/PiezaL";

describe("PiezaL", () => {
  test("se puede crear la L con su nombre", () => {
    const pieza = new PiezaL();
    expect(pieza.nombre).toBe("L");
  });
});
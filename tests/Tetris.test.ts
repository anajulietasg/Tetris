import { describe, expect, test } from "vitest";
import { PiezaBase } from "../src prueba/PiezaBase";

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

import { describe, expect, test } from "vitest";
import { PiezaCuadrado } from "../src prueba/PiezaCuadrado";

describe("PiezaCuadrado", () => {
  test("se puede crear el cuadrado con su nombre", () => {
    const pieza = new PiezaCuadrado();
    expect(pieza.nombre).toBe("Cuadrado");
  });
});

import { describe, expect, test } from "vitest";
import { PiezaL } from "../src prueba/PiezaL";

describe("PiezaL", () => {
  test("se puede crear la L con su nombre", () => {
    const pieza = new PiezaL();
    expect(pieza.nombre).toBe("L");
  });
});

import { describe, expect, test } from "vitest";
import { PiezaPalo } from "../src prueba/PiezaPalo";

describe("PiezaPalo", () => {
  test("se puede crear el palo con su nombre", () => {
    const pieza = new PiezaPalo();
    expect(pieza.nombre).toBe("Palo");
  });
});

import { describe, expect, test } from "vitest";
import { PiezaPerro } from "../src prueba/PiezaPerro";

describe("PiezaPerro", () => {
  test("se puede crear el perro con su nombre", () => {
    const pieza = new PiezaPerro();
    expect(pieza.nombre).toBe("Perro");
  });
});

import { describe, expect, test } from "vitest";
import { PiezaT } from "../src prueba/PiezaT";

describe("PiezaT", () => {
  test("se puede crear una pieza T", () => {
    const pieza = new PiezaT();
    expect(pieza).not.toBeNull();
  });

  test("la pieza T tiene el nombre correcto", () => {
    const pieza = new PiezaT();
    expect(pieza.nombre).toBe("T");
  });
});

import { describe, expect, test } from "vitest";
import { Tetris } from "../src prueba/Tetris";

describe("Tetris", () => {
  test("se puede crear un tetris", () => {
    const tetris = new Tetris(); //Crear instancia de clase (objeto) Tetris
    expect(tetris).not.toBeNull(); //Verifica que exista, no sea Null
  });
});
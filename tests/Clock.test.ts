import { describe, expect, test } from "vitest";
import { Clock } from "../src/Clock";

describe("Clock", () => {
  test("se puede crear un reloj", () => {
    const clock = new Clock();
    expect(clock).not.toBeNull();
  });

  test("el reloj arranca en cero", () => {
    const clock = new Clock();
    expect(clock.tics).toBe(0);
  });

  test("al hacer un tick el reloj avanza a uno", () => {
    const clock = new Clock();
    clock.tick();
    expect(clock.tics).toBe(1);
  });

  test("al hacer tres tics el reloj marca tres", () => {
    const clock = new Clock();
    clock.tick();
    clock.tick();
    clock.tick();
    expect(clock.tics).toBe(3);
  });
});
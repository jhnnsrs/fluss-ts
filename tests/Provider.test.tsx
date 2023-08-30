import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { FaktsProvider } from "@jhnnsrs/fakts";
import { HerreProvider } from "@jhnnsrs/herre";
import React from "react";

describe("Fakts Provider test", () => {
  test("Should be initialized", () => {
    render(
      <FaktsProvider>
        <h4>Content</h4>
      </FaktsProvider>
    );

    expect(screen.getByText(/Content/i)).toBeDefined();
  });
});

describe("Fakts Provider test", () => {
  test("Should be initialized", () => {
    render(
      <HerreProvider>
        <h4>Content</h4>
      </HerreProvider>
    );

    expect(screen.getByText(/Content/i)).toBeDefined();
  });
});

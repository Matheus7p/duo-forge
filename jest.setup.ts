import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

global.console = {
  ...console,
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

if (!AbortSignal.timeout) {
  // @ts-expect-error -- Polyfill for AbortSignal.timeout
  AbortSignal.timeout = jest.fn();
}

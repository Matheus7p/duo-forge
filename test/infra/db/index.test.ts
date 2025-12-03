import { TextEncoder, TextDecoder } from "util";

Object.assign(global, { TextDecoder, TextEncoder });
const MOCK_DB_URL = "postgres://test-url-mock";

jest.mock("@/env", () => ({
  env: {
    POSTGRES_URL: MOCK_DB_URL, 
  },
}));

jest.mock("@neondatabase/serverless", () => ({
  neon: jest.fn(),
}));

jest.mock("drizzle-orm/neon-http", () => ({
  drizzle: jest.fn(),
}));

describe("Database Connection (index.ts)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetModules();
  });

  it("should initialize the connection using env variables", async () => {
    // Act
    await import("@/infra/db/index");
    const { neon } = await import("@neondatabase/serverless");
    const { drizzle } = await import("drizzle-orm/neon-http");

    // Assert
    expect(neon).toHaveBeenCalledWith(MOCK_DB_URL);
    expect(drizzle).toHaveBeenCalled();
  });
});

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


jest.mock("pg", () => ({
  Pool: jest.fn(),
}));

jest.mock("drizzle-orm/node-postgres", () => ({
  drizzle: jest.fn(),
}));

jest.mock("../../../src/env", () => ({
  env: process.env,
}));

describe("Database Connection (index.ts)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize the connection pool with env variables", async () => {
    // Act 
    await import("@/infra/db/index");

    // Assert 
    expect(Pool).toHaveBeenCalledWith({
      connectionString: process.env.POSTGRES_URL,
    });
    
    expect(drizzle).toHaveBeenCalled();
  });
});

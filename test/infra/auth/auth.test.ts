import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/infra/db";
import * as schema from "@/infra/db/schema";

jest.mock("better-auth", () => ({
  betterAuth: jest.fn(),
}));

jest.mock("better-auth/adapters/drizzle", () => ({
  drizzleAdapter: jest.fn(),
}));

jest.mock("@/env", () => ({
  env: {
    DISCORD_CLIENT_ID: "mock_discord_id",
    DISCORD_CLIENT_SECRET: "mock_discord_secret",
  },
}));

jest.mock("@/infra/db", () => ({
  db: { id: "mock-db-instance" },
}));

jest.mock("@/infra/db/schema", () => ({
  usersTable: "mock_users_table_schema",
}));

describe("Auth Server Configuration", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize betterAuth with correct database adapter and providers", () => {
    // Arrange
    const mockAdapterInstance = { name: "drizzle-adapter-instance" };
    (drizzleAdapter as jest.Mock).mockReturnValue(mockAdapterInstance);

    // Act
    jest.isolateModules(() => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("@/infra/auth/auth");
    });

    // Assert
    expect(drizzleAdapter).toHaveBeenCalledTimes(1);
    expect(drizzleAdapter).toHaveBeenCalledWith(
      db,
      expect.objectContaining({
        provider: "pg",
        schema: schema,
      }),
    );
    
    expect(betterAuth).toHaveBeenCalledWith(
      expect.objectContaining({
        database: mockAdapterInstance,
        socialProviders: expect.objectContaining({
          discord: expect.anything(),
        }),
      }),
    );
  });
});

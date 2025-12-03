import { getTableName } from "drizzle-orm";

import { account, session, usersTable, verification } from "@/infra/db/schema";


describe("Users Schema", () => {
  it("should have the correct table name", () => {
    // Assert
    expect(getTableName(usersTable)).toBe("users");
  });

  it("should define the required columns", () => {
    // Act
    const columns = usersTable;

    // Assert
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("discordUser");
    expect(columns).toHaveProperty("username");
    expect(columns).toHaveProperty("avatarUrl");
    expect(columns).toHaveProperty("riotUser");
    expect(columns).toHaveProperty("riotId");
    expect(columns).toHaveProperty("region");
    expect(columns).toHaveProperty("traits");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
  });

  it("should have specific configuration for discordUser", () => {
    // Assert
    expect(usersTable.discordUser.name).toBe("discordUser");
    expect(usersTable.discordUser.isUnique).toBe(true);
  });
});

describe("session Schema", () => {
  it("should have the correct table name", () => {
    // Assert
    expect(getTableName(session)).toBe("session");
  });

  it("should define the required columns", () => {
    // Act
    const columns = session;

    // Assert
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("expiresAt");
    expect(columns).toHaveProperty("token");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
    expect(columns).toHaveProperty("ipAddress");
    expect(columns).toHaveProperty("userAgent");
    expect(columns).toHaveProperty("userId");
  });
});

describe("account Schema", () => {
  it("should have the correct table name", () => {
    // Assert
    expect(getTableName(account)).toBe("account");
  });

  it("should define the required columns", () => {
    // Act
    const columns = account;

    // Assert
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("accountId");
    expect(columns).toHaveProperty("providerId");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
    expect(columns).toHaveProperty("userId");
    expect(columns).toHaveProperty("accessToken");
    expect(columns).toHaveProperty("refreshToken");
    expect(columns).toHaveProperty("idToken");
    expect(columns).toHaveProperty("accessTokenExpiresAt");
    expect(columns).toHaveProperty("refreshTokenExpiresAt");
    expect(columns).toHaveProperty("scope");
    expect(columns).toHaveProperty("password");
  });
});

describe("verification Schema", () => {
  it("should have the correct table name", () => {
    // Assert
    expect(getTableName(verification)).toBe("verification");
  });

  it("should define the required columns", () => {
    // Act
    const columns = verification;

    // Assert
    expect(columns).toHaveProperty("id");
    expect(columns).toHaveProperty("identifier");
    expect(columns).toHaveProperty("value");
    expect(columns).toHaveProperty("expiresAt");
    expect(columns).toHaveProperty("createdAt");
    expect(columns).toHaveProperty("updatedAt");
  });
});

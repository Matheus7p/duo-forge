import { getTableName } from "drizzle-orm";

import { usersTable } from "@/infra/db/schema";


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
    expect(usersTable.discordUser.notNull).toBe(true);
  });
});

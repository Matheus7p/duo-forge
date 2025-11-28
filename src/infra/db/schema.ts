import { sql } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey(),
  discordUser: text("discordUser").notNull().unique(),
  username: text("username"),
  avatarUrl: text("avatarUrl"),
  riotUser: text("riotUser"),
  riotId: text("riotId").unique(),
  region: text("region").notNull(),
  traits: text("traits").array().default(sql`'{}'::text[]`),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

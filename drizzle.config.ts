// eslint-disable-next-line import-x/order
import { config } from "dotenv";

config({ path: ".env.local" });

import { defineConfig } from "drizzle-kit";

import { env } from "@/env";
import "dotenv/config";

// eslint-disable-next-line import-x/no-default-export
export default defineConfig({
  schema: "./src/infra/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.POSTGRES_URL!,
  },
});

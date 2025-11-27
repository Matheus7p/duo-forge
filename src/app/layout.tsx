import type { Metadata } from "next";

import "./globals.css";
import { ReactElement } from "react";


export const metadata: Metadata = {
  title: "Duo Forge",
  description: "Duo Forge",
};

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode}>): ReactElement {
  return (
    <html lang="pt-BR">
      <body >
        {children}
      </body>
    </html>
  );
}

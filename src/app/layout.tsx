import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Duo Forge",
  description: "Duo Forge",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="pt-BR">
      <body >
        {children}
      </body>
    </html>
  );
}

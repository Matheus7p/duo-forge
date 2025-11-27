import type { Metadata } from "next";

import { Inter, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { ReactElement } from "react";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter", 
});

const chakra = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakra",
});


export const metadata: Metadata = {
  title: "Duo Forge",
  description: "Duo Forge",
};

export default function RootLayout ({ children }: Readonly<{ children: React.ReactNode}>): ReactElement {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${chakra.variable}`}>
      <body >
        {children}
      </body>
    </html>
  );
}

import { ReactElement } from "react";

export default function MainLayout ({ children }: Readonly<{ children: React.ReactNode}>): ReactElement {
  return (
    <>
      {children}
    </>
  );
}

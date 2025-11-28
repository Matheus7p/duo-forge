import { ReactNode } from "react";
import { BsDiscord } from "react-icons/bs";

import { ScrambleTitle } from "@/app/components/scrambleTitle.component";
import { Button } from "@/app/components/ui/button";

export default function MainPage (): ReactNode {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
      <ScrambleTitle />
      <p className="text-xl md:text-2xl font-semibold text-zinc-200 text-center" >Stop falling for trolls. Find partners based on your playstyle, bond, and vibe.</p>
      <Button variant={"secondary"} size={"xl"} className="text-xl font-semibold"><BsDiscord size={64}/>Discord</Button>
      <small className="text-sm font-medium text-zinc-400 text-center">By entering, you accept our terms of service.</small>
    </main>
  );
}

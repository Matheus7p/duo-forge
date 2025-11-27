import { ShieldAlert } from "lucide-react";
import { ReactElement } from "react";

const NotFound = (): ReactElement => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 text-zinc-50 p-4">
      <div className="max-w-md w-full text-center space-y-8">
        
        <div className="relative flex justify-center">
          <h1 className="text-9xl font-black text-zinc-900 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <ShieldAlert className="h-24 w-24 text-purple-500/80 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-100">
            Sector Not Found
          </h2>
          <p className="text-zinc-400">
            The coordinates you are trying to access do not exist in the current patch. The lane might have been pushed or the agent is missing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import { ReactElement } from "react";


const Loading = (): ReactElement => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 text-zinc-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="z-10 flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full border-t-2 border-purple-600/30 animate-spin blur-sm" />
          <div className="h-16 w-16 rounded-full border-2 border-zinc-800 border-t-purple-600/30 animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default Loading;

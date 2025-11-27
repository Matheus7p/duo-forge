import { ReactNode } from "react";

export default async function Home (): Promise<ReactNode> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white-900">
          Duo Forge
        </h1>
        <h3 className="text-4xl font-bold mb-4 text-white-900">
          Under Construction
        </h3>

        <p className="text-lg text-white-700 max-w-md mx-auto">
          This application is currently under development.  
          We are working hard to bring you something amazing.  
          Please check back soon!
        </p>

        <p className="mt-6 text-sm text-white-500">
          Thank you for your patience.
        </p>
      </div>
    </main>
  );
}

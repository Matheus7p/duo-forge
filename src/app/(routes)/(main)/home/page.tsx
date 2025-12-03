import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { Header, HeaderContent, HeaderLogo, HeaderMenu } from "@/app/components/header.component";
import { UserProfileDiscord } from "@/app/components/user-profile-discord.component";
import { auth } from "@/infra/auth/auth";

async function HomePage (): Promise<ReactNode> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) redirect("/");
  if(!session.user.image) return "/logo.svg";

  return (
    <main>
      <Header>
        <HeaderContent className="flex flex-col md:flex-row justify-between md:mx-8 md:my-6">
          <HeaderLogo> 
            <h1 className="text-2xl font-bold">{session.user.name}</h1>
          </HeaderLogo>
          <HeaderMenu className="flex flex-col md:flex-row gap-4">
            <UserProfileDiscord avatarUrl={session.user.image}/>
          </HeaderMenu>
        </HeaderContent>
      </Header>
    </main>
  );
};

export default HomePage;

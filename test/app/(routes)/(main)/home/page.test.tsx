import { render, screen } from "@testing-library/react";
import { redirect } from "next/navigation";

import HomePage from "@/app/(routes)/(main)/home/page";
import { auth } from "@/infra/auth/auth";


jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

jest.mock("next/headers", () => ({
  headers: jest.fn().mockResolvedValue({}),
}));

jest.mock("@/infra/auth/auth", () => ({
  auth: {
    api: {
      getSession: jest.fn(),
    },
  },
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(() => {
    throw new Error("Redirected"); 
  }),
}));

jest.mock("@/app/components/header.component", () => ({
  Header: ({ children }: { children: React.ReactNode }) => <div data-testid="header">{children}</div>,
  HeaderContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  HeaderLogo: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  HeaderMenu: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/app/components/user-profile-discord.component", () => ({
  UserProfileDiscord: ({ avatarUrl }: { avatarUrl: string }) => (
    <div data-testid="discord-profile" data-url={avatarUrl} />
  ),
}));

describe("HomePage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should redirect to root if no session exists", async () => {
    (auth.api.getSession as unknown as jest.Mock).mockResolvedValue({ user: null });

    try {
      await HomePage();
    } catch (error) {
      expect((error as Error).message).toBe("Redirected");
    }

    // 4. Verifique se o mock do redirect foi chamado com a rota certa
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { redirect } = require("next/navigation");
    expect(redirect).toHaveBeenCalledWith("/");
  });

  it("should return '/logo.svg' string if user has no image", async () => {
    // Arrange
    (auth.api.getSession as unknown as jest.Mock).mockResolvedValue({
      user: {
        name: "User Without Image",
        image: null,
      },
    });

    // Act
    const result = await HomePage();

    // Assert
    expect(result).toBe("/logo.svg");
    expect(redirect).not.toHaveBeenCalled();
  });

  it("should render user name and profile component when session is valid", async () => {
    // Arrange
    const mockUser = {
      name: "Jesting User",
      image: "https://discord.com/avatar123.png",
    };
    
    (auth.api.getSession as unknown as jest.Mock).mockResolvedValue({
      user: mockUser,
    });

    // Act
    const jsx = await HomePage();
    render(jsx);

    // Assert
    expect(screen.getByText("Jesting User")).toBeInTheDocument();
    
    const profileComponent = screen.getByTestId("discord-profile");
    expect(profileComponent).toBeInTheDocument();
    expect(profileComponent).toHaveAttribute("data-url", mockUser.image);
    expect(redirect).not.toHaveBeenCalled();
  });
});

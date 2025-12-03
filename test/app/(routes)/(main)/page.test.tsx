import { render, screen } from "@testing-library/react";

import MainPage from "@/app/(routes)/(main)/page";

jest.mock("next/headers", () => ({
  headers: jest.fn().mockReturnValue(Promise.resolve(new Headers())),
}));

jest.mock("@/infra/auth/auth-client", () => ({
  authClient: {
    signIn: {
      social: jest.fn(),
    },
  },
}));

jest.mock("@/infra/auth/auth", () => ({
  auth: {
    api: {
      getSession: jest.fn().mockResolvedValue(null),
    },
  },
}));

jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

describe("MainPage", () => {
  it("should render the page components correctly", async () => {
    // Act
    render(await MainPage());

    // Assert
    expect(
      screen.getByText(/Stop falling for trolls\. Find partners based on your playstyle/i),
    ).toBeInTheDocument();

    const discordButton = screen.getByRole("button", { name: /Discord/i });
    expect(discordButton).toBeInTheDocument();
    expect(discordButton.querySelector("svg")).toBeInTheDocument();
    
    expect(
      screen.getByText(/By entering, you accept our terms of service/i),
    ).toBeInTheDocument();
  });
});

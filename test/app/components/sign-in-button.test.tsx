import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonHTMLAttributes } from "react";

import { SignInButton } from "@/app/components/sign-in-button.component"; 
import { authClient } from "@/infra/auth/auth-client";

jest.mock("@/infra/auth/auth-client", () => ({
  authClient: {
    signIn: { social: jest.fn() },
  },
}));

type IButton = ButtonHTMLAttributes<HTMLButtonElement>

jest.mock("@/app/components/ui/button", () => ({
  Button: ({ onClick, children}: IButton) => (
    <button onClick={onClick} data-testid="sign-in-btn">{children}</button>
  ),
}));

jest.mock("react-icons/bs", () => ({
  BsDiscord: () => <span data-testid="discord-icon" />,
}));

describe("SignInButton Component", () => {
  beforeEach(() => { jest.clearAllMocks(); });

  it("should render button and call login", () => {
    render(<SignInButton />);
    const button = screen.getByTestId("sign-in-btn");
    
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(authClient.signIn.social).toHaveBeenCalledWith({
      provider: "discord",
      callbackURL: "/home",
    });
  });
});

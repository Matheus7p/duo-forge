import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";

import { SignOutLabel } from "@/app/components/sign-out-label.component";
import { authClient } from "@/infra/auth/auth-client";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

// Mock do authClient
jest.mock("@/infra/auth/auth-client", () => ({
  authClient: {
    signOut: jest.fn(),
  },
}));

describe("SignOutLabel Component", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it("should render logout text correctly", () => {
    // Arrange & Act
    render(<SignOutLabel />);

    // Assert
    expect(screen.getByText("Logout")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toHaveClass("cursor-pointer");
  });

  it("should call authClient.signOut and redirect to root on success", () => {
    // Arrange
    (authClient.signOut as jest.Mock).mockImplementation(({ fetchOptions }) => {
      if (fetchOptions?.onSuccess) {
        fetchOptions.onSuccess();
      }
    });

    render(<SignOutLabel />);
    const logoutButton = screen.getByText("Logout");

    // Act
    fireEvent.click(logoutButton);

    // Assert
    expect(authClient.signOut).toHaveBeenCalledTimes(1);
    
    expect(authClient.signOut).toHaveBeenCalledWith(
      expect.objectContaining({
        fetchOptions: expect.objectContaining({
          onSuccess: expect.any(Function),
        }),
      }),
    );
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});

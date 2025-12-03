import { render, screen, fireEvent } from "@testing-library/react";
import { PropsWithChildren } from "react";

import { UserProfileDiscord } from "@/app/components/user-profile-discord.component";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @next/next/no-img-element
  default: (props: any) => <img {...props} data-testid="user-avatar" />,
}));

jest.mock("@/app/components/sign-out-label.component", () => ({
  SignOutLabel: () => <div data-testid="sign-out-label">Logout Component</div>,
}));

interface IDiv extends PropsWithChildren{
  animate: string;
  className: string;

}

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, animate, className }: IDiv) => (
      <div 
        data-testid="motion-div" 
        data-animate={JSON.stringify(animate)}
        className={className}
      >
        {children}
      </div>
    ),
  },
}));

describe("UserProfileDiscord Component", () => {
  const mockAvatarUrl = "https://discord.com/my-avatar.png";

  it("should render avatar image with correct url", () => {
    // Arrange & Act
    render(<UserProfileDiscord avatarUrl={mockAvatarUrl} />);

    // Assert
    const image = screen.getByTestId("user-avatar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockAvatarUrl);
    expect(image).toHaveAttribute("width", "50");
    expect(image).toHaveAttribute("height", "50");
  });

  it("should toggle animation states on mouse hover", () => {
    // Arrange
    render(<UserProfileDiscord avatarUrl={mockAvatarUrl} />);
    const signOutLabel = screen.getByTestId("sign-out-label");
    const motionWrapper = signOutLabel.parentElement; 
    const mainContainer = motionWrapper?.parentElement;

    if (!mainContainer || !motionWrapper) {
      throw new Error("Structure mismatch in test mocks");
    }
    expect(motionWrapper).toHaveAttribute(
      "data-animate", 
      JSON.stringify({ width: 0, opacity: 0 }),
    );

    // Act
    fireEvent.mouseEnter(mainContainer);

    // Assert 
    expect(motionWrapper).toHaveAttribute(
      "data-animate", 
      JSON.stringify({ width: "auto", opacity: 1 }),
    );

    // Act
    fireEvent.mouseLeave(mainContainer);

    // Assert
    expect(motionWrapper).toHaveAttribute(
      "data-animate", 
      JSON.stringify({ width: 0, opacity: 0 }),
    );
  });
});

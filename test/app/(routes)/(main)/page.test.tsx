import { render, screen } from "@testing-library/react";

import MainPage from "@/app/(routes)/(main)/page";

describe("MainPage", () => {
  it("should render the page components correctly", () => {
    // Act
    render(<MainPage />);

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

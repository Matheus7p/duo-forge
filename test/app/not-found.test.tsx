import { render, screen } from "@testing-library/react";

import NotFound from "@/app/not-found";

describe("NotFound Page", () => {
  it("should display the main not found message", () => {
    // Arrange & Act
    render(<NotFound />);

    // Assert
    expect(screen.getByText("Sector Not Found")).toBeInTheDocument();
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("should render the ShieldAlert lucide icon", () => {
    // Arrange & Act
    const { container } = render(<NotFound />);

    // Assert
    const icon = container.querySelector("svg.lucide-shield-alert");
    expect(icon).not.toBeNull();
  });
});

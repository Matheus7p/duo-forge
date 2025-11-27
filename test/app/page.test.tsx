import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Page", () => {
  it("should display the text \"Duo Forge\"", async () => {
    // Act
    render( await Home());

    // Assert
    expect(screen.getByText("Duo Forge")).toBeInTheDocument();
  });
});

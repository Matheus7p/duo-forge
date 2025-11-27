import Home from "@/app/page";

import { render, screen } from "@testing-library/react";

describe("Page", () => {
  it("should display the text \"Duo Forge\"", () => {
    render(<Home />);
    expect(screen.getByText("Duo Forge")).toBeInTheDocument();
  });
});

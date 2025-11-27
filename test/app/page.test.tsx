import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Page", () => {
  it("should display the text \"Duo Forge\"", () => {
    render(<Home />);
    expect(screen.getByText("Duo Forge")).toBeInTheDocument();
  });
});

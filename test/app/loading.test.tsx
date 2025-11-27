import { render } from "@testing-library/react";

import Loading from "@/app/loading";

describe("Loading Page", () => {
  it("should render the spinning loader", () => {
    // Arrange & Act
    const { container } = render(<Loading />);

    // Assert
    const spinner = container.querySelector("div.animate-spin");
    expect(spinner).not.toBeNull();
  });
});

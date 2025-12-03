import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JSX, ReactNode } from "react";

import { ScrambleTitle } from "@/app/components/scrambleTitle.component";

jest.mock("framer-motion", () => {
  return {
    ...jest.requireActual("framer-motion"),
    motion: new Proxy(
      {},
      {
        get: (_target, elementKey: string) => {
          const Component = elementKey as keyof JSX.IntrinsicElements;

          return function MotionMock (props: { children?: ReactNode } & Record<string, unknown>) {
            const { children, ...rest } = props;
            return <Component {...rest}>{children}</Component>;
          };
        },
      },
    ),
  };
});

describe("ScrambleTitle component", () => {
  it("should render initial word correctly", () => {
    // Arrange
    render(<ScrambleTitle />);

    // Act
    const initialText = screen.getByText("Game Match");

    // Assert
    expect(initialText).toBeInTheDocument();
  });

  it("should update text during scrambling", async () => {
    // Arrange
    render(<ScrambleTitle swapSpeed={1} holdTime={1} />);

    // Act & Assert
    await waitFor(() => {
      const element = screen.getByTestId("scramble-text");
      expect(element.textContent).not.toBe("Game Match");
    });
  });

  it("should move to next word after animation completes", async () => {
    // Arrange
    render(<ScrambleTitle swapSpeed={5} holdTime={5} />);

    // Assert
    await waitFor(() => {
      expect(screen.getByText("Team Up")).toBeInTheDocument();
    }, { timeout: 10000 });
  });
});

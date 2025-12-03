import { render, screen } from "@testing-library/react";

import { Header, HeaderContent, HeaderMenu, HeaderLogo } from "@/app/components/header.component";


describe("Header Components", () => {
  
  describe("Header", () => {
    it("should render as a <header> tag with children", () => {
      // Arrange
      const contentText = "Main Header Content";

      // Act
      render(<Header>{contentText}</Header>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("HEADER");
    });

    it("should apply custom className", () => {
      // Arrange
      const customClass = "bg-black";
      const contentText = "Styled Header";

      // Act
      render(<Header className={customClass}>{contentText}</Header>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toHaveClass(customClass);
    });
  });

  describe("HeaderContent", () => {
    it("should render as a <div> tag with children", () => {
      // Arrange
      const contentText = "Inner Content";

      // Act
      render(<HeaderContent>{contentText}</HeaderContent>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("DIV");
    });

    it("should apply custom className", () => {
      // Arrange
      const customClass = "flex-row";
      const contentText = "Flex Content";

      // Act
      render(<HeaderContent className={customClass}>{contentText}</HeaderContent>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toHaveClass(customClass);
    });
  });

  describe("HeaderMenu", () => {
    it("should render as a <div> tag with children", () => {
      // Arrange
      const contentText = "Menu Items";

      // Act
      render(<HeaderMenu>{contentText}</HeaderMenu>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("DIV");
    });

    it("should apply custom className", () => {
      // Arrange
      const customClass = "gap-4";
      const contentText = "Spaced Menu";

      // Act
      render(<HeaderMenu className={customClass}>{contentText}</HeaderMenu>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toHaveClass(customClass);
    });
  });

  describe("HeaderLogo", () => {
    it("should render as a <div> tag with children", () => {
      // Arrange
      const contentText = "My Logo";

      // Act
      render(<HeaderLogo>{contentText}</HeaderLogo>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toBeInTheDocument();
      expect(element.tagName).toBe("DIV");
    });

    it("should apply custom className", () => {
      // Arrange
      const customClass = "text-bold";
      const contentText = "Bold Logo";

      // Act
      render(<HeaderLogo className={customClass}>{contentText}</HeaderLogo>);
      const element = screen.getByText(contentText);

      // Assert
      expect(element).toHaveClass(customClass);
    });
  });
});

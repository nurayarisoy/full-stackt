import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";

test("renders HomePage", () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import { RegisterPage } from "./RegisterPage";

test("renders RegisterPage", () => {
  render(<RegisterPage />);
  const linkElement = screen.getByText(/button/i);
  expect(linkElement).toBeInTheDocument();
});

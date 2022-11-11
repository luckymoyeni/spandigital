import { render, screen } from "@testing-library/react";
import { DisplayGrid } from "./index";

test("Checks if the grid is in the document", () => {
  render(<DisplayGrid isOpen={true} currentImages={[]} />);
  const linkElement = screen.getByTestId("displayGrid");
  expect(linkElement).toBeInTheDocument();
});

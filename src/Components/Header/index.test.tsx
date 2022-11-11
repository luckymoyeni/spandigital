import { render, screen } from "@testing-library/react";
import { Header } from "./index";

test("Checks if the grid is in the document", () => {
  render(<Header isOpen={true} onClose={() => {}} title="Topic" />);
  const linkElement = screen.getByTestId("topicTitle");
  expect(linkElement).toBeInTheDocument();

  const linkElementText = screen.getByText("Topic");
  expect(linkElementText).toBeInTheDocument();
});

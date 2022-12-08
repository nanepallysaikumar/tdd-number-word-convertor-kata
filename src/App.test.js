import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

const setup = () => {
  const utils = render(<App />);
  const input = utils.getByLabelText("number-input");
  return {
    input,
    ...utils,
  };
};

test("It should have input box rendered on the screen.", () => {
  const { input } = setup();
  expect(input).toBeVisible();
});

test("It should show message if user provides more than 4 digits in input box", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "12345" } });
  expect(
    screen.getByText("Please enter only digits less than or equal to 5.")
  ).toBeInTheDocument();
});

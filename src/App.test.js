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

test("It should show message if user provides characters instead of digits in input box", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "abc" } });
  expect(
    screen.getByText("Please enter only digits.")
  ).toBeInTheDocument();
});

test("It should convert number 0 to word Zero.", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "0" } });
  expect(
    screen.getByText("Zero.")
  ).toBeInTheDocument();
});

test("It should convert number 1 to word One.", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "1" } });
  expect(
    screen.getByText("One")
  ).toBeInTheDocument();
});


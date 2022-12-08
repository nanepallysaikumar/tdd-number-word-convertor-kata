import { render } from "@testing-library/react";
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

import React from "react";
import { render } from "@testing-library/react";
import ThankYou from "./ThankYou.jsx";

it("renders ThankYou correctly", () => {
  const { container } = render(<ThankYou />);
  expect(container).toMatchSnapshot();
});

import React from "react";
import { render } from "@testing-library/react";
import CakeDropdown from "./CakeDropdown.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the CakeCategories component correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <CakeDropdown />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
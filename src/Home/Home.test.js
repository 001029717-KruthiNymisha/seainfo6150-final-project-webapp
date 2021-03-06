import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the home component correctly", () => {
  const { container } = render(
  <BrowserRouter>
      <Home />
      </BrowserRouter>
      );
  expect(container).toMatchSnapshot();
});

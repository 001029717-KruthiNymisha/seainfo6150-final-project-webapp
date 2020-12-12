import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer.jsx";
import { BrowserRouter } from 'react-router-dom';

it("renders the Header component correctly", () => {
  const { container } = render(
  <BrowserRouter>
      <Footer />
      </BrowserRouter>
      );
  expect(container).toMatchSnapshot();
});

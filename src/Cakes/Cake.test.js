import React from "react";
import { render } from "@testing-library/react";
import Cake from "./Cakes.jsx";

it("renders the Cake component correctly", () => {
  const { container } = render(
    <Cake
      Category="GlutenFreeCakes"
      bookId="006-Gluten-Free Coffee Cake"
    />
  );
  expect(container).toMatchSnapshot();
});
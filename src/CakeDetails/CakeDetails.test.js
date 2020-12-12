import React from "react";
import { render } from "@testing-library/react";
import CakeDetails from "./CakeDetails.jsx";

it("renders the CakeDetails component correctly", () => {
  const { container } = render(
    <CakeDetails
      Summary="Sour cream coffee cake is hand made with real sour cream and butter, crunchy walnuts and a sprinkle of cinnamon for rich, fragrant flavor. Serve it for brunch or dessert with a hot cup of coffee or tea for a delightful treat."
      Ingredients="Granulated sugar, white rice flour, butter, sour cream, walnuts, eggs, powdered sugar, potato starch, brown sugar, tapioca flour, milk, vanilla, nonfat milk powder, baking powder, cinnamon, guar gum, salt, baking soda."
    />
  );
  expect(container).toMatchSnapshot();
});
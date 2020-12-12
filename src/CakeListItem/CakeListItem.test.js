import React from "react";
import { render } from "@testing-library/react";
import CakeListItem from "./CakeListItem.jsx";

it("renders the CakeListItem component correctly", () => {
  const { container } = render(
    <CakeListItem
      url="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0804/img60o.jpg"
      title="Gluten-Free Happy Birthday Cake"
    />
  );
  expect(container).toMatchSnapshot();
});

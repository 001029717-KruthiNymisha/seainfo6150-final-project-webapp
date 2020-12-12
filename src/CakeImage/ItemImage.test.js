import React from "react";
import { render } from "@testing-library/react";
import ItemImage from "./ItemImage.jsx";

it("renders the ItemImage component correctly", () => {
  const url="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0588/img36o.jpg";

  const { container } = render(<ItemImage url={url} />);
  expect(container).toMatchSnapshot();
});
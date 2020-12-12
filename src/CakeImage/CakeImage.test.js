import React from "react";
import { render } from "@testing-library/react";
import CakeImage from "./CakeImage.jsx";

it("renders the CakeImage component correctly", () => {
  const url="https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0588/img36o.jpg";

  const { container } = render(<CakeImage url={url} />);
  expect(container).toMatchSnapshot();
});
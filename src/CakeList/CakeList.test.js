import React from "react";
import { render } from "@testing-library/react";
import CakeList from "./CakeList.jsx";
import { BrowserRouter } from 'react-router-dom'

it("renders the CakeList component correctly", () => {
  const test = [
    {
      Category: "GlutenFreeCakes",
      slug: "005-Gluten-Free Happy Birthday Cake",
      title: "Gluten-Free Happy Birthday Cake",
      image: {
        _url: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202038/0804/img60o.jpg"
      },
    }
  ]

  const { container } = render(
    <BrowserRouter>
      <CakeList
        cakes={Object.values(test)}
        pageTitle="GlutenFreeCakes"
      />
    </BrowserRouter>
   );
    expect(container).toMatchSnapshot();
  });
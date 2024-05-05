import React from "react";
import ListCards from "@components/ListCards";

const storeData = [
  {
    product: "Cashew",
    productDetails: "King of Cashews",
    imgUrl: "/images/assets/cashew.png",
    pdpUrl: "/plants/cahews",
  },
  {
    product: "Honey",
    productDetails: "Sage Honey",
    imgUrl: "/images/assets/honey.png",
    pdpUrl: "/plants/honey",
  },
  {
    product: "Pepper",
    productDetails: "Pepper Nigrum",
    imgUrl: "/images/assets/pepper.png",
    pdpUrl: "/plants/pepper",
  },
  {
    product: "Coconut Tree",
    productDetails: "Kalpasree",
    imgUrl: "/images/assets/coconut.png",
    pdpUrl: "/plants/coconut",
  },
  {
    product: "Banana Tree",
    productDetails: "Grand Naine",
    imgUrl: "/images/assets/banana.png",
    pdpUrl: "/plants/banana",
  },
  {
    product: "Cashew",
    productDetails: "King of Cashews",
    imgUrl: "/images/assets/cashew.png",
    pdpUrl: "/plants/cahews",
  },
  {
    product: "Honey",
    productDetails: "Sage Honey",
    imgUrl: "/images/assets/honey.png",
    pdpUrl: "/products/honey",
  },
  {
    product: "Pepper",
    productDetails: "Pepper Nigrum",
    imgUrl: "/images/assets/pepper.png",
    pdpUrl: "/products/pepper",
  },
  {
    product: "Coconut Tree",
    productDetails: "Kalpasree",
    imgUrl: "/images/assets/coconut.png",
    pdpUrl: "/products/coconut",
  },
  {
    product: "Banana Tree",
    productDetails: "Grand Naine",
    imgUrl: "/images/assets/banana.png",
    pdpUrl: "/products/banana",
  },
];

export default function FarmPantsView() {
  return (
    <div className="plant-listing">
      <div className="listing-wrap">
        <div className="product-head">
          <h1>Farm Plants</h1>
          <p>Find the list of plants available in Our Stores.</p>
        </div>
        <div className="product-lists">
          <div className="row">
            {storeData?.map((item, index) => (
              <ListCards data={item} key={`key_${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

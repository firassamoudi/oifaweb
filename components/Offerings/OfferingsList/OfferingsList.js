import React from "react";

import OfferingsCard from "./OfferingsCard/OfferingsCard";

const OfferingsList = (props) => {
  return (
    <div className="OfferingsList">
      {props.cards.map((card, index) => {
        return (
          <div className="OfferingsList__item" key={index}>
            <OfferingsCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default OfferingsList;

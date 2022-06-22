import React from "react";

import TalentCard from "./TalentCard/TalentCard";

const TalentsList = (props) => {
  return (
    <div className="TalentsList">
      {props.cards.map((card, index) => {
        return (
          <div className="TalentsList__item" key={index}>
            <TalentCard {...card} />
          </div>
        );
      })}
    </div>
  );
};

export default TalentsList;

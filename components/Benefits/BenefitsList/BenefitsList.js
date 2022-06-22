import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import BenefitsCard from "./BenefitsCard/BenefitsCard";
const BenefitsList = (props) => {
  return (
    <div className="BenefitsList">
      {props?.list?.map((item, index) => {
        return (
          <div
            className={cx("BenefitsList__item", {
              "BenefitsList__item--corporate": props.corporate,
            })}
            key={index}
          >
            {props.corporate ? (
              <BenefitsCard
                dark={index === 1 || index === 2}
                yellow={index === 0 || index === 3}
                title={item.title}
                text={item.text}
                corporate={props.corporate}
              />
            ) : (
              <BenefitsCard
                dark={index % 2 === 0 && props.dark}
                yellow={index % 2 !== 0}
                title={item.title}
                text={item.text}
                corporate={props.corporate}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BenefitsList;

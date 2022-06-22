import cx from "classnames";
import React from "react";

import Typography from "../../../Typography";

const BenefitsCard = (props) => {
  return (
    <div
      className={cx(
        "BenefitsCard",
        { "BenefitsCard--yellow": props.yellow },
        { "BenefitsCard--dark": props.dark },
        { "BenefitsCard--corporate": props.corporate }
      )}
    >
      <div className="BenefitsCard__box">
        <Typography
          size={props.corporate ? "3rem" : "8rem"}
          color={props.dark ? "#fff" : "#051438"}
          face="Bold"
          m={props.corporate ? "0 0 2rem 0" : "initial"}
        >
          {props.title}
        </Typography>
        <Typography
          size="1.6rem"
          face="Medium"
          height={props.corporate ? "2.5rem" : "2rem"}
          color={
            props.yellow && props.dark
              ? "#010C24"
              : props.dark
                ? "#fff"
                : "#051438"
          }
        >
          {props.text}
        </Typography>
      </div>
    </div>
  );
};

export default BenefitsCard;

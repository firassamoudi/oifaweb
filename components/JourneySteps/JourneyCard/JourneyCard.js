import cx from "classnames";
import React from "react";

import Typography from "../../../pages/coming-soon/components/Typography";
const JourneyCard = (props) => {
  return props.list.map((item, index) => {
    return (
      <div
        key={index}
        className={cx("CardBox__card", {
          "CardBox__card--dark": props.theme,
        })}
      >
        <Typography
          color={props.theme ? "#FFFFFF" : "#010C24"}
          size="2.6rem"
          face="Medium"
          m="0 0 .4rem 0"
        >
          {item.title}
        </Typography>
        <Typography
          color={props.theme ? "#838FA7" : "rgba(1,12,36,0.5)"}
          size="2.2rem"
          face="Medium"
          height="2.8rem"
        >
          {item.para}
        </Typography>
      </div>
    );
  });
};

export default JourneyCard;

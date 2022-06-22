import cx from "classnames";
import React from "react";

import Typography from "../../Typography";

const StepCard = (props) => {
  return (
    <div className={cx("StepCard", { "StepCard--dark": props.dark })}>
      <Typography
        color={props.dark ? "#FFFFFF" : "#010C24"}
        size="2.6rem"
        face="Medium"
        m="0 0 .4rem 0"
      >
        {props.title}
      </Typography>
      <Typography
        color={props.dark ? "#838FA7" : "rgba(1,12,36,0.5)"}
        size="2.2rem"
        face="Medium"
        height="2.8rem"
      >
        {props.para}
      </Typography>
    </div>
  );
};

export default StepCard;

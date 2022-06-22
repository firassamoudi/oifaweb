import React from "react";

import Typography from "../Typography";
import StepsList from "./StepsList/StepsList";

const TimeLine = (props) => {
  return (
    <div className="TimeLine">
      <div className="TimeLine__header">
        <div className="TimeLine__head">
          <Typography color="#fff" size="4.1rem" align="justify" face="Bold">
            Your journey with OIFA step by step
          </Typography>
        </div>
      </div>
      <StepsList steps={props.steps} dark={props.dark} cor={props.cor} />
    </div>
  );
};

export default TimeLine;

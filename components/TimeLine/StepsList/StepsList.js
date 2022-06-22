import React from "react";

import Step from "./Step/Step";
const StepsList = (props) => {
  return (
    <div className="StepsList">
      {props.steps.map((step, index) => {
        return (
          <div className="StepsList__step" key={index}>
            <Step
              dark={props.dark}
              steps={step}
              type={step.type}
              last={index === props.steps.length - 1}
              first={index === 0}
              cor={props.cor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StepsList;

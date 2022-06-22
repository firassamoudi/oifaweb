import React from "react";

import Typography from "../../pages/coming-soon/components/Typography";
import BenefitsList from "./BenefitsList/BenefitsList";

const Benefits = (props) => {
  return (
    <div className="Benefits">
      <div className="Benefits__header">
        <div className="Benefits__head">
          <Typography
            color={props.dark ? "#fff" : "#051438"}
            size="3.8rem"
            face="Bold"
            height="4.8rem"
            m="0 0 3.4rem 0"
          >
            Why considering open innovation?
          </Typography>
          <Typography
            color={props.dark ? "#fff" : "#051438"}
            size="2.2rem"
            face="Medium"
            height="2.8rem"
          >
            {props.content}
          </Typography>
        </div>
      </div>
      <div className="Benefits__body">
        <BenefitsList
          list={props.list}
          dark={props.dark}
          corporate={props.corporate}
        />
      </div>
    </div>
  );
};

export default Benefits;

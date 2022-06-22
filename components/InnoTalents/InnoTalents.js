import React from "react";

import Typography from "../../pages/coming-soon/components/Typography";
import TalentsList from "./TalentsList/TalentsList";

const InnoTalents = (props) => {
  return (
    <div className="InnoTalents">
      <Typography color="#fff" size="4.2rem" face="Bold" m="0 0 7.74rem 0">
        Type of Innovation talents
      </Typography>
      <TalentsList cards={props.list} />
    </div>
  );
};

export default InnoTalents;

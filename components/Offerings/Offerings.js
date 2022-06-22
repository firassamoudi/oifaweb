import React from "react";

import Typography from "../Typography";
import OfferingsList from "./OfferingsList/OfferingsList";

const Offerings = (props) => {
  return (
    <div className="Offerings">
      <div className="Offerings__header">
        <div className="Offerings__head">
          <Typography
            color="#051438"
            size="4.1rem"
            face="Bold"
            height="5.2rem"
            align="justify"
          >
            What can you do through OIFA?
          </Typography>
        </div>
      </div>

      <div className="Offerings__body">
        <OfferingsList cards={props.list} />
      </div>
    </div>
  );
};

export default Offerings;

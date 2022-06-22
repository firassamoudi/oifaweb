import Image from "next/image";
import React from "react";

import Typography from "../../../../pages/coming-soon/components/Typography";
const OfferingsCard = (props) => {
  return (
    <div className="OfferingsCard">
      <div className="OfferingsCard__img">
        <Image
          alt=""
          preload="false"
          layout="fill"
          loading="lazy"
          src={props.img}
        />
      </div>
      <Typography
        color="#000020"
        size="2.6rem"
        face="Medium"
        m="3.3rem 0 2.3rem 0"
      >
        {props.text}
      </Typography>
      <Typography
        color="#838FA7"
        size="2rem"
        face="Medium"
        align="justify"
        height="2.5rem"
      >
        {props.para}
      </Typography>
    </div>
  );
};

export default OfferingsCard;

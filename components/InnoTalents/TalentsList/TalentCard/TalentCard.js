import Image from "next/image";
import React from "react";

import Typography from "../../../../pages/coming-soon/components/Typography";
const TalentCard = (props) => {
  return (
    <div className="TalentCard">
      <div className="TalentCard__img">
        <Image
          alt=""
          preload="false"
          layout="fill"
          loading="lazy"
          src={props.img}
        />
      </div>
      <Typography color="#fff" size="2.6rem" face="Medium">
        {props.text}
      </Typography>
    </div>
  );
};

export default TalentCard;

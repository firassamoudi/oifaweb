import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";

import Typography from "../Typography";

const AboutUsHeader = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <div className="AboutUsHeader">
      <div className="AboutUsHeader__head">
        <Typography
          face={phone ? "Bold" : "Black"}
          size={phone ? "4.66rem" : "4.5rem"}
          color="#051438"
          height={phone ? "6rem" : "4.9rem"}
        >
          We are digitising open innovation in Africa
        </Typography>
      </div>
      <div className="AboutUsHeader__composition-outer">
        <div className="AboutUsHeader__composition">
          <div className="AboutUsHeader__composition__under" />
          <div className="AboutUsHeader__composition__img">
            <img alt="" src="aboutHeader.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;

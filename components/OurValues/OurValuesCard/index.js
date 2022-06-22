import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Typography from "../../Typography";

const OurValuesCard = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <Box className="OurValuesCard">
      <Typography
        size={phone ? "2.66rem" : "2rem"}
        face="Black"
        color="#FBCA66"
        m={phone ? "0 0 1.6rem 0" : "0 0 1.1rem 0"}
      >
        Openness
      </Typography>
      <Typography
        size={phone ? "2rem" : "1.4rem"}
        face="Book"
        height={phone ? "2.5rem" : "1.5rem"}
        color="#FFFFFF"
      >
        We act, we build and we thrive under uncertainty. We are problem
        solvers.
      </Typography>
    </Box>
  );
};

export default OurValuesCard;

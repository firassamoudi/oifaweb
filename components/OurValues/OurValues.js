import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Typography from "../Typography";
import OurValuesCard from "./OurValuesCard";
const OurValues = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );

  return (
    <Box className="OurValues">
      <Box className="OurValues__head">
        <Typography
          face="Black"
          color="#FFFFFF"
          height="4.97rem"
          size={phone ? "4rem" : "3.8rem"}
        >
          Our values
        </Typography>
      </Box>
      <Box className="OurValues__values">
        <Box component="ul" className="OurValues__list">
          {[1, 1, 1, 1, 1, 1].map((_, index) => {
            return (
              <Box component="li" className="OurValues__item" key={index}>
                <OurValuesCard />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default OurValues;

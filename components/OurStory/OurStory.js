import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Typography from "../Typography";

const OurStory = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  return (
    <Box className="OurStory">
      <Box className="OurStory__head">
        <Typography
          face={phone ? "Bold" : "Black"}
          size={phone ? "4rem" : "3.8rem"}
          color="#051438"
        >
          Our story
        </Typography>
      </Box>
      <Box className="OurStory__para">
        <Typography
          face="Book"
          size={phone ? "2.66rem" : "1.6rem"}
          color="#838FA7"
          align="justify"
          height={phone ? "5.33rem" : "3.2rem"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
          dui sed dui vestibulum cursus ac sed orci. Quisque lorem sapien,
          tempus et cursus non, elementum ac tellus. Donec ac urna diam. Vivamus
          porta vehicula urna at fermentum. Nulla facilisi. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam eget dui sed dui
          vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus
          non, elementum ac tellus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eget dui sed dui vestibulum cursus ac sed orci.
          Quisque lorem sapien, tempus et cursus non, elementum ac tellus. Donec
          ac urna diam. Vivamus porta vehicula urna at fermentum. Nulla
          facilisi.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurStory;

import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import cx from "classnames";
import json2mq from "json2mq";
import React from "react";

import Earth from "../Earth/Earth";
import Map from "../Map/Map";
import Typography from "../Typography";

const HowWeAre = () => {
  const smallDesc = useMediaQuery(
    json2mq({
      maxWidth: 1200,
    })
  );
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );

  return (
    <Box
      className={cx(
        "HowWeAre",
        "container",
        `container--${smallDesc ? "std" : "l"}`
      )}
    >
      <Box className="HowWeAre__info">
        <Typography
          name="h2"
          face="Bold"
          color="#000020"
          size="4.1rem"
          height="5rem"
          m="0 0 2rem 0"
        >
          What is Open Innovation For Africa?
        </Typography>
        <Typography
          face="Medium"
          color="#838FA7"
          size={phone ? "2rem" : "1.6rem"}
          height={phone ? "3.66rem" : "2.4rem"}
          style={{ textAlign: "justify" }}
        >
          Open Innovation For Africa, OIFA, is a platform that connects
          corporates from public and private sectors, and nonprofit
          organizations from across Africa with a community of innovation
          talents that gathers students, designers, developers, startups and
          researchers around a specific challenge.
        </Typography>
      </Box>
      <Box className="HowWeAre__map">
        <Earth />
      </Box>
    </Box>
  );
};

export default HowWeAre;

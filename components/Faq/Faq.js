import Box from "@material-ui/core/Box";
import React from "react";

import Accordion from "../Accordion/Accordion";
import Typography from "../Typography";

const Faq = (props) => {
  return (
    <Box className="Faq">
      <Typography
        size="3.2rem"
        color="#051438"
        face="Bold"
        height="3.7rem"
        //align="center"
        m="0 0 2.3rem 0"
      >
        {props.title}
      </Typography>
      <Typography
        size="1.5rem"
        color="#051438"
        face="Book"
        height="1.9rem"
        align="center"
      >
        {props.para}
      </Typography>
      <Accordion list={props.list} />
    </Box>
  );
};

export default Faq;

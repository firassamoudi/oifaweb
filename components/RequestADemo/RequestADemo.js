import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import json2mq from "json2mq";
import Link from "next/link";
import React from "react";

import Button from "../Button";
import Typography from "../Typography";

const RequestADemo = () => {
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );

  return (
    <Box className="RequestADemo">
      <Box className="container container--s">
        <Box className="RequestADemo-box">
          <Typography
            face="Bold"
            color="#fff"
            size="4.1rem"
            lSpace="-0.047rem"
            height="5.28rem"
            align="center"
            m="0 0 3.14rem 0"
          >
            Start your journey with OIFA
          </Typography>
          <Box className="RequestADemo__btn">
            <Link href="book-a-demo">
              <Button>Book a Demo</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RequestADemo;

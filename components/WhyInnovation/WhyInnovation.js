import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import json2mq from "json2mq";
import Image from "next/image";
import React from "react";

import Typography from "../Typography";
import InnovationTabs from "./InnovationTabs/InnovationTabs";

const content = [
  "Multiple studies have proven that Open Innovation is a more profitable way to innovate. It helps you reduce costs, increase differentiation in the market, and create new revenue streams for your organization.",
  "As an Innovation talent, you will have the ability to co-create and innovate in collaboration with corporates from across Africa to translate your ideas into solutions that can address their problem statements.",
];

const WhyInnovation = () => {
  const smallDesk = useMediaQuery(
    json2mq({
      maxWidth: 1120,
    })
  );
  const phone = useMediaQuery(
    json2mq({
      maxWidth: 500,
    })
  );
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = (device, value) => {
    return !device ? (
      <Typography size="1.6rem" height="2.4rem" face="Medium" color="#838FA7">
        {content[value]}
      </Typography>
    ) : (
      <Typography
        size="2rem"
        height="3.66rem"
        face="Medium"
        color="#838FA7"
        style={{
          maxWidth: "56rem",
        }}
      >
        {content[value]}
      </Typography>
    );
  };

  const renderImg = () => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={value}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
        >
          <Image
            alt=""
            preload="false"
            layout="fill"
            loading="eager"
            src={value ? "/innovation.webp" : "/corporate.webp"}
          />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <Box className="WhyInnovation container container--std">
      {phone && (
        <>
          <Typography
            size="4.1rem"
            color="#000020"
            face="Bold"
            m="0 0 2rem 0"
            height="5rem"
          >
            {value === 0
              ? "What are the benefits of Open Innovation?"
              : "How can Open Innovation help you? "}
          </Typography>
          {renderContent(phone, value)}
        </>
      )}

      <Box className="WhyInnovation__img">
        <Box className="WhyInnovation__composition">
          <Box className="WhyInnovation__composition-img">{renderImg()}</Box>
        </Box>
      </Box>
      <Box className="WhyInnovation__content">
        <Box className="WhyInnovation__content-box">
          {!phone && (
            <>
              <Typography
                size={smallDesk ? "3.5rem" : "4.1rem"}
                color="#000020"
                face="Bold"
                m="0 0 2.5rem 0"
              >
                {value === 0
                  ? "What are the benefits of Open Innovation?"
                  : "How can Open Innovation help you? "}
              </Typography>
              {renderContent(phone, value)}
            </>
          )}
          <Box className="WhyInnovation__tabs">
            <InnovationTabs value={value} handleChange={handleChange} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyInnovation;

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";

import Typography from "../Typography";

const Accordionn = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className="Accordion">
      <Typography size="2rem" color="#051438" face="Bold" m="0 0 2.4rem 0">
        {props.title}
      </Typography>
      {props.list.map((item, index, list) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <RemoveIcon
                    style={{
                      color: "#000",
                      fontSize: "2rem",
                    }}
                  />
                ) : (
                  <AddIcon
                    style={{
                      color: "#000",
                      fontSize: "2rem",
                    }}
                  />
                )
              }
            >
              <Typography
                size="2rem"
                color={expanded === `panel${index}` ? "#ffc857" : "#000000"}
                face="Medium"
                style={{
                  transition: "all .3s",
                }}
              >
                {item.summary}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Box>
                {Array.isArray(item.details) ? (
                  item.details.map((item, index) => {
                    return (
                      <Typography
                        key={index}
                        size="1.8rem"
                        color="#828da4"
                        face="Book"
                        height="24px"
                        m="0 0 2rem 0"
                      >
                        {item}
                      </Typography>
                    );
                  })
                ) : (
                  <Typography
                    size="1.8rem"
                    color="#828da4"
                    face="Book"
                    height="24px"
                  >
                    {item.details}
                  </Typography>
                )}
              </Box>
            </AccordionDetails>
            {list.length - 1 !== index && <Box className="Accordion__line" />}
          </Accordion>
        );
      })}
    </Box>
  );
};

export default Accordionn;

import Box from "@material-ui/core/Box";
import React from "react";

import Typography from "../../Typography";

const SectionPara = (props) => {
  return (
    <Box className="SectionPara">
      {props.img && (
        <Box className="SectionPara__img">
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1533310266094-8898a03807dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        </Box>
      )}

      {props.title && (
        <Typography color="#051438" size="2.8rem" height="4.9rem" face="Black">
          Covid19: Embrace Crisis Through Innovation
        </Typography>
      )}

      {props.para && (
        <Typography
          size="1.6rem"
          color="#838FA7"
          height="3.2rem"
          align="justify"
          face="Book"
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
          facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam eget dui sed dui vestibulum cursus ac sed orci. Quisque lorem
          sapien, tempus et cursus non, elementum ac tellus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Etiam eget dui sed dui
          vestibulum cursus ac sed orci. Quisque lorem sapien, tempus et cursus
          non, elementum ac tellus. Donec ac urna diam.
        </Typography>
      )}
      {props.link && (
        <Typography
          color="#0199FF"
          size="1.6rem"
          height="3.2rem"
          face="Medium"
          style={{
            textDecoration: "underline",
          }}
        >
          Download link
        </Typography>
      )}
    </Box>
  );
};

export default SectionPara;

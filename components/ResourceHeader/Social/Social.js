import Box from "@material-ui/core/Box";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React from "react";

const Social = () => {
  const socials = [
    { icon: FacebookIcon },
    { icon: LinkedInIcon },
    { icon: TwitterIcon },
  ];

  return (
    <Box className="Social">
      <Box component="ul" className="Social__list">
        {socials.map((social, index) => {
          return (
            <Box component="li" className="Social__item" key={index}>
              <social.icon
                style={{
                  fontSize: "2.5rem",
                  color: "#243160",
                }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Social;
